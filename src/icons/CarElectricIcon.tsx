import React, { FC, memo } from 'react';
import CarElectricSvg from '../svg/car-electric.svg';

export interface ICarElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarElectricIcon: FC<ICarElectricIconProps> = memo(props => {
  return <CarElectricSvg {...props} />;
});
