import React, { FC, memo } from 'react';
import MotorbikeSvg from '../svg/motorbike.svg';

export interface IMotorbikeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotorbikeIcon: FC<IMotorbikeIconProps> = memo(props => {
  return <MotorbikeSvg {...props} />;
});
