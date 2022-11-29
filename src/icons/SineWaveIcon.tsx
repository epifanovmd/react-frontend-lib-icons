import React, { FC, memo } from 'react';
import SineWaveSvg from '../svg/sine-wave.svg';

export interface ISineWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SineWaveIcon: FC<ISineWaveIconProps> = memo(props => {
  return <SineWaveSvg {...props} />;
});
