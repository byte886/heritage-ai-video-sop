import React from 'react';
import {Composition} from 'remotion';
import {DataVideo} from './DataVideo';

export const Root: React.FC = () => {
  return (
    <Composition
      id="DataVideo"
      component={DataVideo}
      durationInFrames={300}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
