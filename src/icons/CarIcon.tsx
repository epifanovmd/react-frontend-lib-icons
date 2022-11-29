import React, { FC, memo } from 'react';
import CarSvg from '../svg/car.svg';

export interface ICarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarIcon: FC<ICarIconProps> = memo(props => {
  return <CarSvg {...props} />;
});
