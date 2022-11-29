import React, { FC, memo } from 'react';
import WaveformSvg from '../svg/waveform.svg';

export interface IWaveformIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaveformIcon: FC<IWaveformIconProps> = memo(props => {
  return <WaveformSvg {...props} />;
});
