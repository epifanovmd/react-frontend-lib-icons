import React, { FC, memo } from 'react';
import CarInfoSvg from '../svg/car-info.svg';

export interface ICarInfoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarInfoIcon: FC<ICarInfoIconProps> = memo(props => {
  return <CarInfoSvg {...props} />;
});
