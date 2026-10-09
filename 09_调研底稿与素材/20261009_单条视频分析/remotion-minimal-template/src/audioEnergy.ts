// 计算某一帧对应的音频音量（RMS 能量包络）。
// 直接从波形取一帧时长的样本求均方根：说话时约 0.05~0.3，停顿时接近 0。
// 比 FFT 单 bin 平均更能代表"嘴巴开合"，适合驱动口型与 BGM 闪避。
export const getFrameRMS = (audioData: any, frame: number, fps: number): number => {
  const waveform = audioData.channelWaveforms[0] as Float32Array;
  const sampleRate: number = audioData.sampleRate;
  const center = Math.floor((frame / fps) * sampleRate);
  const half = Math.floor(sampleRate / fps / 2);

  let sum = 0;
  let count = 0;
  for (let i = -half; i < half; i++) {
    const idx = center + i;
    if (idx >= 0 && idx < waveform.length) {
      sum += waveform[idx] * waveform[idx];
      count++;
    }
  }
  return Math.sqrt(sum / Math.max(1, count));
};
