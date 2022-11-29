import React, { FC, memo } from 'react';
import CarSeatHeaterSvg from '../svg/car-seat-heater.svg';

export interface ICarSeatHeaterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSeatHeaterIcon: FC<ICarSeatHeaterIconProps> = memo(props => {
  return <CarSeatHeaterSvg {...props} />;
});
