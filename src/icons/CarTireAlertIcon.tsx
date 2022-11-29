import React, { FC, memo } from 'react';
import CarTireAlertSvg from '../svg/car-tire-alert.svg';

export interface ICarTireAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarTireAlertIcon: FC<ICarTireAlertIconProps> = memo(props => {
  return <CarTireAlertSvg {...props} />;
});
