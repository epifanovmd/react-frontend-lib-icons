import React, { FC, memo } from 'react';
import CarBrakeParkingSvg from '../svg/car-brake-parking.svg';

export interface ICarBrakeParkingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeParkingIcon: FC<ICarBrakeParkingIconProps> = memo(props => {
  return <CarBrakeParkingSvg {...props} />;
});
