import React, { FC, memo } from 'react';
import CarConvertibleSvg from '../svg/car-convertible.svg';

export interface ICarConvertibleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarConvertibleIcon: FC<ICarConvertibleIconProps> = memo(props => {
  return <CarConvertibleSvg {...props} />;
});
