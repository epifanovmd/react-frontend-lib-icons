import React, { FC, memo } from 'react';
import CarClockSvg from '../svg/car-clock.svg';

export interface ICarClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarClockIcon: FC<ICarClockIconProps> = memo(props => {
  return <CarClockSvg {...props} />;
});
