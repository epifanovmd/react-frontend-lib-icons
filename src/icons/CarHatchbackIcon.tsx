import React, { FC, memo } from 'react';
import CarHatchbackSvg from '../svg/car-hatchback.svg';

export interface ICarHatchbackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarHatchbackIcon: FC<ICarHatchbackIconProps> = memo(props => {
  return <CarHatchbackSvg {...props} />;
});
