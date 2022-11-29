import React, { FC, memo } from 'react';
import TrafficLightOutlineSvg from '../svg/traffic-light-outline.svg';

export interface ITrafficLightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrafficLightOutlineIcon: FC<ITrafficLightOutlineIconProps> = memo(props => {
  return <TrafficLightOutlineSvg {...props} />;
});
