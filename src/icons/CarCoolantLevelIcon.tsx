import React, { FC, memo } from 'react';
import CarCoolantLevelSvg from '../svg/car-coolant-level.svg';

export interface ICarCoolantLevelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarCoolantLevelIcon: FC<ICarCoolantLevelIconProps> = memo(props => {
  return <CarCoolantLevelSvg {...props} />;
});
