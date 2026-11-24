# Etape 2 : fabrique les MP3 avec les voix francaises de Windows (Julie, Paul).
# Usage : powershell -File outils\podcasts.ps1 scripts.json dossier_travail dossier_mp3
param([string]$Json,[string]$Tmp,[string]$Out)
$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
[void][Windows.Media.SpeechSynthesis.SpeechSynthesizer,Windows.Media.SpeechSynthesis,ContentType=WindowsRuntime]
[void][Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime]
[void][Windows.Media.Transcoding.MediaTranscoder,Windows.Media.Transcoding,ContentType=WindowsRuntime]
[void][Windows.Media.MediaProperties.MediaEncodingProfile,Windows.Media.MediaProperties,ContentType=WindowsRuntime]
$ext=[System.WindowsRuntimeSystemExtensions].GetMethods()
$asOp=($ext|?{$_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'})[0]
$asAct=($ext|?{$_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncActionWithProgress`1'})[0]
function Wait-Op($o,$t){$k=$asOp.MakeGenericMethod($t).Invoke($null,@($o));[void]$k.Wait(-1);$k.Result}
function Wait-Act($o){$k=$asAct.MakeGenericMethod([double]).Invoke($null,@($o));[void]$k.Wait(-1)}
$toStream=([System.IO.WindowsRuntimeStreamExtensions].GetMethods()|?{$_.Name -eq 'AsStreamForRead' -and $_.GetParameters().Count -eq 1})[0]
$Voix=@{};foreach($v in [Windows.Media.SpeechSynthesis.SpeechSynthesizer]::AllVoices){if($v.DisplayName -match 'Julie'){$Voix['A']=$v};if($v.DisplayName -match 'Paul'){$Voix['B']=$v}}
$eps=[IO.File]::ReadAllText($Json,[Text.Encoding]::UTF8)|ConvertFrom-Json
$res=@{}
$syn=New-Object Windows.Media.SpeechSynthesis.SpeechSynthesizer
$syn.Options.SpeakingRate=1.06
foreach($e in $eps){
  $wav=Join-Path $Tmp ($e.cle+'.wav');$pcm=New-Object IO.MemoryStream;$hdr=$null;$times=@()
  foreach($l in $e.lignes){
    $syn.Voice=$Voix[$l.v]
    $s=Wait-Op ($syn.SynthesizeTextToStreamAsync($l.t)) ([Windows.Media.SpeechSynthesis.SpeechSynthesisStream])
    $st=$toStream.Invoke($null,@($s));$ms=New-Object IO.MemoryStream;$st.CopyTo($ms);$b=$ms.ToArray()
    $p=12;while([Text.Encoding]::ASCII.GetString($b,$p,4) -ne 'data'){$p+=8+[BitConverter]::ToInt32($b,$p+4)}
    $n=[Math]::Min([BitConverter]::ToInt32($b,$p+4),$b.Length-$p-8)
    if(-not $hdr){$rate=[BitConverter]::ToInt32($b,24);$ch=[BitConverter]::ToInt16($b,22);$bits=[BitConverter]::ToInt16($b,34);$bps=$rate*$ch*$bits/8;$hdr=1}
    $times+=[Math]::Round($pcm.Length/$bps,2)
    $pcm.Write($b,$p+8,$n)
    $sil=New-Object byte[] ([int]([Math]::Floor($bps*0.28/2)*2));$pcm.Write($sil,0,$sil.Length)
  }
  $fs=[IO.File]::Create($wav);$w=New-Object IO.BinaryWriter($fs);$a=[Text.Encoding]::ASCII
  $w.Write($a.GetBytes('RIFF'));$w.Write([int](36+$pcm.Length));$w.Write($a.GetBytes('WAVEfmt '));$w.Write([int]16);$w.Write([int16]1);$w.Write([int16]$ch);$w.Write([int]$rate);$w.Write([int]$bps);$w.Write([int16]($ch*$bits/8));$w.Write([int16]$bits);$w.Write($a.GetBytes('data'));$w.Write([int]$pcm.Length);$pcm.WriteTo($fs);$w.Close()
  $mp3=$e.cle+'.mp3'
  $src=Wait-Op ([Windows.Storage.StorageFile]::GetFileFromPathAsync($wav)) ([Windows.Storage.StorageFile])
  $dir=Wait-Op ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync($Out)) ([Windows.Storage.StorageFolder])
  $dst=Wait-Op ($dir.CreateFileAsync($mp3,[Windows.Storage.CreationCollisionOption]::ReplaceExisting)) ([Windows.Storage.StorageFile])
  $prof=[Windows.Media.MediaProperties.MediaEncodingProfile]::CreateMp3([Windows.Media.MediaProperties.AudioEncodingQuality]::Low)
  $prof.Audio.Bitrate=64000;$prof.Audio.ChannelCount=1;$prof.Audio.SampleRate=24000
  $tr=New-Object Windows.Media.Transcoding.MediaTranscoder
  $pre=Wait-Op ($tr.PrepareFileTranscodeAsync($src,$dst,$prof)) ([Windows.Media.Transcoding.PrepareTranscodeResult])
  if(-not $pre.CanTranscode){throw "transcodage impossible : $($pre.FailureReason)"}
  Wait-Act ($pre.TranscodeAsync())
  Remove-Item $wav
  $res[$e.cle]=@{d=[Math]::Round($pcm.Length/$bps,1);t=$times}
  Write-Output "$($e.cle) $([Math]::Round($pcm.Length/$bps)) s $((Get-Item (Join-Path $Out $mp3)).Length)"
}
[IO.File]::WriteAllText((Join-Path $Tmp 'min.json'),($res|ConvertTo-Json -Depth 4 -Compress))
[IO.File]::WriteAllText((Join-Path $Out 'minutages.js'),'window.MINUTAGES='+($res|ConvertTo-Json -Depth 4 -Compress)+';')
