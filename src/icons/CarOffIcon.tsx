import React, { FC, memo } from 'react';
import CarOffSvg from '../svg/car-off.svg';

export interface ICarOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarOffIcon: FC<ICarOffIconProps> = memo(props => {
  return <CarOffSvg {...props} />;
});
