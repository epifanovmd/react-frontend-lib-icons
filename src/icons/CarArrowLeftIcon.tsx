import React, { FC, memo } from 'react';
import CarArrowLeftSvg from '../svg/car-arrow-left.svg';

export interface ICarArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarArrowLeftIcon: FC<ICarArrowLeftIconProps> = memo(props => {
  return <CarArrowLeftSvg {...props} />;
});
