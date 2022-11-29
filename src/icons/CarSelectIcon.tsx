import React, { FC, memo } from 'react';
import CarSelectSvg from '../svg/car-select.svg';

export interface ICarSelectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSelectIcon: FC<ICarSelectIconProps> = memo(props => {
  return <CarSelectSvg {...props} />;
});
