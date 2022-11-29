import React, { FC, memo } from 'react';
import MotorbikeOffSvg from '../svg/motorbike-off.svg';

export interface IMotorbikeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotorbikeOffIcon: FC<IMotorbikeOffIconProps> = memo(props => {
  return <MotorbikeOffSvg {...props} />;
});
