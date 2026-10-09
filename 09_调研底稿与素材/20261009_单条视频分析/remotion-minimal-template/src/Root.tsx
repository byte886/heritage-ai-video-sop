import React from 'react';
import {Composition} from 'remotion';
import {DataVideo} from './DataVideo';
import {AnchorVideo} from './AnchorVideo';

export const Root: React.FC = () => {
  return (
    <>
      {/* 纯数据可视化（无声 / 无数字人） */}
      <Composition
        id="DataVideo"
        component={DataVideo}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={720}
      />

      {/* 虚拟主播：配音 + BGM + 数字人（音频数据由组件内 useAudioData 加载） */}
      <Composition
        id="AnchorVideo"
        component={AnchorVideo}
        durationInFrames={330}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
