import React, { FC, memo } from 'react';
import CarBrakeWornLiningsSvg from '../svg/car-brake-worn-linings.svg';

export interface ICarBrakeWornLiningsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeWornLiningsIcon: FC<ICarBrakeWornLiningsIconProps> = memo(props => {
  return <CarBrakeWornLiningsSvg {...props} />;
});
