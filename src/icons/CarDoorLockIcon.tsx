import React, { FC, memo } from 'react';
import CarDoorLockSvg from '../svg/car-door-lock.svg';

export interface ICarDoorLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarDoorLockIcon: FC<ICarDoorLockIconProps> = memo(props => {
  return <CarDoorLockSvg {...props} />;
});
