import React, { FC, memo } from 'react';
import SteeringOffSvg from '../svg/steering-off.svg';

export interface ISteeringOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SteeringOffIcon: FC<ISteeringOffIconProps> = memo(props => {
  return <SteeringOffSvg {...props} />;
});
