import React, { FC, memo } from 'react';
import CarWrenchSvg from '../svg/car-wrench.svg';

export interface ICarWrenchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarWrenchIcon: FC<ICarWrenchIconProps> = memo(props => {
  return <CarWrenchSvg {...props} />;
});
