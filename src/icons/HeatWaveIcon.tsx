import React, { FC, memo } from 'react';
import HeatWaveSvg from '../svg/heat-wave.svg';

export interface IHeatWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeatWaveIcon: FC<IHeatWaveIconProps> = memo(props => {
  return <HeatWaveSvg {...props} />;
});
