import React, { FC, memo } from 'react';
import RadarSvg from '../svg/radar.svg';

export interface IRadarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadarIcon: FC<IRadarIconProps> = memo(props => {
  return <RadarSvg {...props} />;
});
