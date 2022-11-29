import React, { FC, memo } from 'react';
import CarSideSvg from '../svg/car-side.svg';

export interface ICarSideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSideIcon: FC<ICarSideIconProps> = memo(props => {
  return <CarSideSvg {...props} />;
});
