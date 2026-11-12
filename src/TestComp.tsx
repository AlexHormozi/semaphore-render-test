import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';

export const TestComp: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const barWidthPercent = interpolate(frame, [0, durationInFrames - 1], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#101018',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{fontSize: 110, fontWeight: 900, textAlign: 'center', lineHeight: 1.1, padding: '0 60px'}}>
        SEMAPHORE
        <br />
        RENDER
        <br />
        TEST
      </div>
      <div style={{marginTop: 90, width: '80%', height: 48, backgroundColor: '#2a2a3a'}}>
        <div style={{width: `${barWidthPercent}%`, height: '100%', backgroundColor: '#ff5533'}} />
      </div>
      <div style={{marginTop: 60, fontSize: 64, fontWeight: 700, color: '#aaccff'}}>Frame {frame}</div>
    </AbsoluteFill>
  );
};
