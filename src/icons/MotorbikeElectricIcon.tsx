import React, { FC, memo } from 'react';
import MotorbikeElectricSvg from '../svg/motorbike-electric.svg';

export interface IMotorbikeElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotorbikeElectricIcon: FC<IMotorbikeElectricIconProps> = memo(props => {
  return <MotorbikeElectricSvg {...props} />;
});
