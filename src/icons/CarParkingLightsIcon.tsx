import React, { FC, memo } from 'react';
import CarParkingLightsSvg from '../svg/car-parking-lights.svg';

export interface ICarParkingLightsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarParkingLightsIcon: FC<ICarParkingLightsIconProps> = memo(props => {
  return <CarParkingLightsSvg {...props} />;
});
