import React, { FC, memo } from 'react';
import ClockMinusSvg from '../svg/clock-minus.svg';

export interface IClockMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockMinusIcon: FC<IClockMinusIconProps> = memo(props => {
  return <ClockMinusSvg {...props} />;
});
