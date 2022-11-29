import React, { FC, memo } from 'react';
import CarPickupSvg from '../svg/car-pickup.svg';

export interface ICarPickupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarPickupIcon: FC<ICarPickupIconProps> = memo(props => {
  return <CarPickupSvg {...props} />;
});
