import React, { FC, memo } from 'react';
import CarShiftPatternSvg from '../svg/car-shift-pattern.svg';

export interface ICarShiftPatternIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarShiftPatternIcon: FC<ICarShiftPatternIconProps> = memo(props => {
  return <CarShiftPatternSvg {...props} />;
});
