import React, { FC, memo } from 'react';
import CarLightAlertSvg from '../svg/car-light-alert.svg';

export interface ICarLightAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarLightAlertIcon: FC<ICarLightAlertIconProps> = memo(props => {
  return <CarLightAlertSvg {...props} />;
});
