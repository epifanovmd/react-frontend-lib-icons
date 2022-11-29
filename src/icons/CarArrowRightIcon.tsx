import React, { FC, memo } from 'react';
import CarArrowRightSvg from '../svg/car-arrow-right.svg';

export interface ICarArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarArrowRightIcon: FC<ICarArrowRightIconProps> = memo(props => {
  return <CarArrowRightSvg {...props} />;
});
