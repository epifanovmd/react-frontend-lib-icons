import React, { FC, memo } from 'react';
import TrafficConeSvg from '../svg/traffic-cone.svg';

export interface ITrafficConeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrafficConeIcon: FC<ITrafficConeIconProps> = memo(props => {
  return <TrafficConeSvg {...props} />;
});
