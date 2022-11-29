import React, { FC, memo } from 'react';
import CarBrakeAbsSvg from '../svg/car-brake-abs.svg';

export interface ICarBrakeAbsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeAbsIcon: FC<ICarBrakeAbsIconProps> = memo(props => {
  return <CarBrakeAbsSvg {...props} />;
});
