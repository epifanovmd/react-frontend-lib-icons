import React, { FC, memo } from 'react';
import TrafficLightSvg from '../svg/traffic-light.svg';

export interface ITrafficLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrafficLightIcon: FC<ITrafficLightIconProps> = memo(props => {
  return <TrafficLightSvg {...props} />;
});
