import React, { FC, memo } from 'react';
import CarSearchSvg from '../svg/car-search.svg';

export interface ICarSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSearchIcon: FC<ICarSearchIconProps> = memo(props => {
  return <CarSearchSvg {...props} />;
});
