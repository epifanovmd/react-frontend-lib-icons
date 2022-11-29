import React, { FC, memo } from 'react';
import CarSeatCoolerSvg from '../svg/car-seat-cooler.svg';

export interface ICarSeatCoolerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSeatCoolerIcon: FC<ICarSeatCoolerIconProps> = memo(props => {
  return <CarSeatCoolerSvg {...props} />;
});
