import React, { FC, memo } from 'react';
import SteeringSvg from '../svg/steering.svg';

export interface ISteeringIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SteeringIcon: FC<ISteeringIconProps> = memo(props => {
  return <SteeringSvg {...props} />;
});
