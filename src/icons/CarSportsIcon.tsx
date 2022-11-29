import React, { FC, memo } from 'react';
import CarSportsSvg from '../svg/car-sports.svg';

export interface ICarSportsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSportsIcon: FC<ICarSportsIconProps> = memo(props => {
  return <CarSportsSvg {...props} />;
});
