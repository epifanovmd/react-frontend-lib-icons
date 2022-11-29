import React, { FC, memo } from 'react';
import CarBrakeTemperatureSvg from '../svg/car-brake-temperature.svg';

export interface ICarBrakeTemperatureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeTemperatureIcon: FC<ICarBrakeTemperatureIconProps> = memo(props => {
  return <CarBrakeTemperatureSvg {...props} />;
});
