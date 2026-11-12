import React from 'react';
import {Composition} from 'remotion';
import {TestComp} from './TestComp';

export const Root: React.FC = () => {
  return (
    <Composition
      id="TestComp"
      component={TestComp}
      durationInFrames={60}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
