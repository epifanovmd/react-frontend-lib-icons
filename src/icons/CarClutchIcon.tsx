import React, { FC, memo } from 'react';
import CarClutchSvg from '../svg/car-clutch.svg';

export interface ICarClutchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarClutchIcon: FC<ICarClutchIconProps> = memo(props => {
  return <CarClutchSvg {...props} />;
});
