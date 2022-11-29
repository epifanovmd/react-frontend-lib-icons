import React, { FC, memo } from 'react';
import CarBrakeFluidLevelSvg from '../svg/car-brake-fluid-level.svg';

export interface ICarBrakeFluidLevelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeFluidLevelIcon: FC<ICarBrakeFluidLevelIconProps> = memo(props => {
  return <CarBrakeFluidLevelSvg {...props} />;
});
