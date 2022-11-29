import React, { FC, memo } from 'react';
import CarChildSeatSvg from '../svg/car-child-seat.svg';

export interface ICarChildSeatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarChildSeatIcon: FC<ICarChildSeatIconProps> = memo(props => {
  return <CarChildSeatSvg {...props} />;
});
