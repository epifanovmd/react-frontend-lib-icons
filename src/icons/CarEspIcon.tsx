import React, { FC, memo } from 'react';
import CarEspSvg from '../svg/car-esp.svg';

export interface ICarEspIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarEspIcon: FC<ICarEspIconProps> = memo(props => {
  return <CarEspSvg {...props} />;
});
