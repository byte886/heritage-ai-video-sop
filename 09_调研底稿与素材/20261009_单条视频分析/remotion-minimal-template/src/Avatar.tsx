import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {getFrameRMS} from './audioEnergy';

// 程序化 SVG 虚拟主播：用配音的实时音量(RMS)驱动嘴巴开合，并周期性眨眼。
// 纯代码绘制，无需图片素材，确定性渲染、免费、可批量。
export const Avatar: React.FC<{audioData: any}> = ({audioData}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const rms = getFrameRMS(audioData, frame, fps);
  const speaking = rms > 0.035;
  const open = speaking ? Math.min(1, rms * 3.2) : 0; // 0~1 张嘴度

  // 眨眼：每 96 帧（3.2s）眨 4 帧
  const blinking = frame % 96 > 92;
  const eyeRy = blinking ? 1.8 : 11;

  // 头部随说话轻微点动
  const headBob = Math.sin(frame / 30) * 2 + open * 3;

  const mouthRy = 2 + open * 15;
  const mouthRx = 16 + open * 8;

  return (
    <svg viewBox="0 0 400 520" width="100%" height="100%">
      <defs>
        <linearGradient id="suit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2a4a" />
          <stop offset="1" stopColor="#0d1730" />
        </linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4d3b8" />
          <stop offset="1" stopColor="#e6bd9e" />
        </linearGradient>
      </defs>

      <g transform={`translate(0 ${headBob})`}>
        {/* 西装 */}
        <path d="M 70 520 L 95 360 Q 200 320 305 360 L 330 520 Z" fill="url(#suit)" />
        {/* 衬衫领口 */}
        <path d="M 168 340 L 200 420 L 232 340 Q 200 360 168 340 Z" fill="#e8eef7" />
        {/* 青色领带 */}
        <path d="M 192 380 L 208 380 L 214 460 L 200 490 L 186 460 Z" fill="#4dd0e1" />
        {/* 脖子 */}
        <rect x="176" y="288" width="48" height="70" rx="20" fill="url(#skin)" />
        {/* 头 */}
        <ellipse cx="200" cy="210" rx="92" ry="104" fill="url(#skin)" />
        {/* 头发 */}
        <path
          d="M 110 180 Q 110 92 200 92 Q 290 92 290 180 Q 290 140 250 132 Q 200 100 150 132 Q 112 140 110 180 Z"
          fill="#26314d"
        />
        {/* 耳朵 */}
        <ellipse cx="110" cy="215" rx="14" ry="22" fill="url(#skin)" />
        <ellipse cx="290" cy="215" rx="14" ry="22" fill="url(#skin)" />

        {/* 眼睛（眼白） */}
        <ellipse cx="165" cy="205" rx="20" ry={eyeRy} fill="#fff" />
        <ellipse cx="235" cy="205" rx="20" ry={eyeRy} fill="#fff" />
        {/* 瞳孔（眨眼时隐藏，近似闭眼） */}
        {!blinking && (
          <>
            <circle cx="167" cy="207" r="9" fill="#26314d" />
            <circle cx="237" cy="207" r="9" fill="#26314d" />
            <circle cx="170" cy="203" r="3" fill="#fff" />
            <circle cx="240" cy="203" r="3" fill="#fff" />
          </>
        )}
        {/* 眉毛 */}
        <path d="M 145 178 Q 165 170 185 178" stroke="#26314d" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 215 178 Q 235 170 255 178" stroke="#26314d" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* 鼻子 */}
        <path d="M 200 220 Q 194 248 202 252 Q 210 250 206 244" stroke="#d3a885" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* 嘴巴（随说话开合，闭合时为一条线） */}
        <ellipse cx="200" cy="278" rx={mouthRx} ry={mouthRy} fill="#7a2e2e" />
        {open > 0.05 && (
          <ellipse cx="200" cy={278 + mouthRy * 0.4} rx={mouthRx * 0.72} ry={mouthRy * 0.55} fill="#c95757" />
        )}
      </g>
    </svg>
  );
};
