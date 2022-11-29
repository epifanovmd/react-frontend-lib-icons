import React, { FC, memo } from 'react';
import CarCogSvg from '../svg/car-cog.svg';

export interface ICarCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarCogIcon: FC<ICarCogIconProps> = memo(props => {
  return <CarCogSvg {...props} />;
});
