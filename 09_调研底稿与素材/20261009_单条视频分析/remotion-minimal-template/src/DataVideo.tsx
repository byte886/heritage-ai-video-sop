import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';

const data = [
  {label: '01', value: 32},
  {label: '02', value: 58},
  {label: '03', value: 45},
  {label: '04', value: 76},
  {label: '05', value: 92},
  {label: '06', value: 100},
];

const COLOR = '#4dd0e1';

export const DataVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // 整体镜头缓慢推进
  const scale = interpolate(frame, [0, 300], [1, 1.08]);

  // 标题入场
  const titleProgress = spring({frame: frame - 5, fps, config: {damping: 200}});
  const titleY = interpolate(titleProgress, [0, 1], [-30, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0a0e1a',
        transform: `scale(${scale})`,
        fontFamily: 'system-ui, -apple-system, "PingFang SC", sans-serif',
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: 'absolute',
          top: 70,
          left: 80,
          transform: `translateY(${titleY}px)`,
          opacity: titleProgress,
        }}
      >
        <div style={{color: COLOR, fontSize: 22, letterSpacing: 4, fontWeight: 600}}>
          DATA VISUALIZATION
        </div>
        <div style={{color: 'white', fontSize: 48, fontWeight: 700, marginTop: 8}}>
          数据增长可视化样片
        </div>
      </div>

      {/* 柱状图 */}
      <div
        style={{
          position: 'absolute',
          bottom: 90,
          left: 80,
          right: 80,
          height: 340,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 28,
        }}
      >
        {data.map((d, i) => {
          const barProgress = spring({
            frame: frame - (40 + i * 12),
            fps,
            config: {damping: 14, stiffness: 120, mass: 0.8},
          });
          const h = d.value * 3 * barProgress;
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
              <div
                style={{
                  color: COLOR,
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 8,
                  opacity: barProgress,
                }}
              >
                {Math.round(d.value * barProgress)}
              </div>
              <div
                style={{
                  width: '70%',
                  height: h,
                  background: 'linear-gradient(180deg, #4dd0e1 0%, #1a73e8 100%)',
                  borderRadius: '8px 8px 0 0',
                  boxShadow: '0 0 24px rgba(77,208,225,0.4)',
                }}
              />
              <div style={{color: '#7a86a8', fontSize: 20, marginTop: 10}}>
                {d.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
