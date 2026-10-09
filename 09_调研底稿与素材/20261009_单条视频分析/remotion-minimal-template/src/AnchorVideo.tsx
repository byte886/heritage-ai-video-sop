import React from 'react';
import {
  AbsoluteFill,
  Audio,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';
import {useAudioData} from '@remotion/media-utils';
import {Avatar} from './Avatar';
import {getFrameRMS} from './audioEnergy';

const data = [
  {label: '01', value: 32},
  {label: '02', value: 58},
  {label: '03', value: 45},
  {label: '04', value: 76},
  {label: '05', value: 92},
  {label: '06', value: 100},
];

export const AnchorVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  // 组件内加载音频数据（避免经 props 序列化丢失 TypedArray）
  const audioData = useAudioData(staticFile('voiceover.wav'));
  if (!audioData) return null;

  // 配音有效帧范围（volume 回调在音频结束后仍会被调用，需 clamp 防越界）
  const maxVoiceFrame = Math.floor(audioData.durationInSeconds * fps) - 1;

  // BGM 自动闪避：配音能量大 → BGM 压低；停顿 → 回升
  const bgmVolume = (f: number) => {
    const sf = Math.min(Math.max(0, f), maxVoiceFrame);
    const t = Math.min(1, getFrameRMS(audioData, sf, fps) / 0.05);
    return 0.3 - 0.22 * t; // 说话压低到约0.08，停顿约0.3
  };

  // 配音淡入 / 淡出
  const voVolume = (f: number) =>
    interpolate(f, [0, 12, 318, 330], [0, 1, 1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  // 右侧面板入场
  const panel = spring({frame: frame - 10, fps, config: {damping: 200}});
  const panelX = interpolate(panel, [0, 1], [60, 0]);

  // 累计大数字（0 → 403）
  const total = data.reduce((a, d) => a + d.value, 0);
  const numP = interpolate(frame, [40, 260], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const shown = Math.round(total * numP);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#070b16',
        fontFamily: 'system-ui,-apple-system,"PingFang SC",sans-serif',
      }}
    >
      {/* 声音：配音 + BGM（自动闪避） */}
      <Audio src={staticFile('voiceover.wav')} volume={voVolume} />
      <Audio src={staticFile('bgm.wav')} volume={bgmVolume} />

      {/* 顶部装饰条 + 栏目标识 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          background: 'linear-gradient(90deg,#4dd0e1,#1a73e8)',
        }}
      />
      <div style={{position: 'absolute', top: 40, left: 60, color: '#4dd0e1', fontSize: 20, letterSpacing: 4}}>
        AI ANCHOR · 虚拟主播数据播报
      </div>

      {/* 左侧数字人 */}
      <div style={{position: 'absolute', left: 20, bottom: 0, width: 430, height: 560}}>
        <Avatar audioData={audioData} />
      </div>

      {/* 右侧数据面板 */}
      <div
        style={{
          position: 'absolute',
          left: 480,
          top: 90,
          right: 60,
          transform: `translateX(${panelX}px)`,
          opacity: panel,
        }}
      >
        <div style={{color: '#7a86a8', fontSize: 22}}>累计指数</div>
        <div style={{color: '#fff', fontSize: 96, fontWeight: 800, lineHeight: 1.1}}>{shown}</div>

        {/* 竖条 */}
        <div style={{marginTop: 30, height: 250, display: 'flex', alignItems: 'flex-end', gap: 22}}>
          {data.map((d, i) => {
            const p = spring({
              frame: frame - (50 + i * 14),
              fps,
              config: {damping: 14, stiffness: 120, mass: 0.8},
            });
            return (
              <div
                key={d.label}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  height: '100%',
                }}
              >
                <div style={{color: '#4dd0e1', fontSize: 18, fontWeight: 700, opacity: p}}>
                  {Math.round(d.value * p)}
                </div>
                <div
                  style={{
                    width: '68%',
                    height: d.value * 2.1 * p,
                    background: 'linear-gradient(180deg,#4dd0e1,#1a73e8)',
                    borderRadius: '6px 6px 0 0',
                    boxShadow: '0 0 18px rgba(77,208,225,0.35)',
                  }}
                />
                <div style={{color: '#7a86a8', fontSize: 16, marginTop: 6}}>{d.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
