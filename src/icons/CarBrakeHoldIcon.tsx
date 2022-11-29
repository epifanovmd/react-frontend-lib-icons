import React, { FC, memo } from 'react';
import CarBrakeHoldSvg from '../svg/car-brake-hold.svg';

export interface ICarBrakeHoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeHoldIcon: FC<ICarBrakeHoldIconProps> = memo(props => {
  return <CarBrakeHoldSvg {...props} />;
});
