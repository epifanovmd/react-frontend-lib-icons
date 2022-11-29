import React, { FC, memo } from 'react';
import CarLiftedPickupSvg from '../svg/car-lifted-pickup.svg';

export interface ICarLiftedPickupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarLiftedPickupIcon: FC<ICarLiftedPickupIconProps> = memo(props => {
  return <CarLiftedPickupSvg {...props} />;
});
