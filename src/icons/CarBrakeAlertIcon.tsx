import React, { FC, memo } from 'react';
import CarBrakeAlertSvg from '../svg/car-brake-alert.svg';

export interface ICarBrakeAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeAlertIcon: FC<ICarBrakeAlertIconProps> = memo(props => {
  return <CarBrakeAlertSvg {...props} />;
});
