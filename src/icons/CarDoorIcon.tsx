import React, { FC, memo } from 'react';
import CarDoorSvg from '../svg/car-door.svg';

export interface ICarDoorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarDoorIcon: FC<ICarDoorIconProps> = memo(props => {
  return <CarDoorSvg {...props} />;
});
