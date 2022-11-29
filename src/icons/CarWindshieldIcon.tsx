import React, { FC, memo } from 'react';
import CarWindshieldSvg from '../svg/car-windshield.svg';

export interface ICarWindshieldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarWindshieldIcon: FC<ICarWindshieldIconProps> = memo(props => {
  return <CarWindshieldSvg {...props} />;
});
