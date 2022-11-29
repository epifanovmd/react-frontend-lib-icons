import React, { FC, memo } from 'react';
import CarConnectedSvg from '../svg/car-connected.svg';

export interface ICarConnectedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarConnectedIcon: FC<ICarConnectedIconProps> = memo(props => {
  return <CarConnectedSvg {...props} />;
});
