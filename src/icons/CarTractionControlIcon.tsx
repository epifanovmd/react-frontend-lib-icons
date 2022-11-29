import React, { FC, memo } from 'react';
import CarTractionControlSvg from '../svg/car-traction-control.svg';

export interface ICarTractionControlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarTractionControlIcon: FC<ICarTractionControlIconProps> = memo(props => {
  return <CarTractionControlSvg {...props} />;
});
