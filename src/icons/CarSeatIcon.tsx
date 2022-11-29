import React, { FC, memo } from 'react';
import CarSeatSvg from '../svg/car-seat.svg';

export interface ICarSeatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSeatIcon: FC<ICarSeatIconProps> = memo(props => {
  return <CarSeatSvg {...props} />;
});
