import React, { FC, memo } from 'react';
import CarCruiseControlSvg from '../svg/car-cruise-control.svg';

export interface ICarCruiseControlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarCruiseControlIcon: FC<ICarCruiseControlIconProps> = memo(props => {
  return <CarCruiseControlSvg {...props} />;
});
