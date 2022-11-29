import React, { FC, memo } from 'react';
import WaveSvg from '../svg/wave.svg';

export interface IWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaveIcon: FC<IWaveIconProps> = memo(props => {
  return <WaveSvg {...props} />;
});
