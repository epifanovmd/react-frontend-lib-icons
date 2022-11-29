import React, { FC, memo } from 'react';
import ClockTimeFiveSvg from '../svg/clock-time-five.svg';

export interface IClockTimeFiveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeFiveIcon: FC<IClockTimeFiveIconProps> = memo(props => {
  return <ClockTimeFiveSvg {...props} />;
});
