import React, { FC, memo } from 'react';
import WavesSvg from '../svg/waves.svg';

export interface IWavesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WavesIcon: FC<IWavesIconProps> = memo(props => {
  return <WavesSvg {...props} />;
});
