import React, { FC, memo } from 'react';
import CarWashSvg from '../svg/car-wash.svg';

export interface ICarWashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarWashIcon: FC<ICarWashIconProps> = memo(props => {
  return <CarWashSvg {...props} />;
});
