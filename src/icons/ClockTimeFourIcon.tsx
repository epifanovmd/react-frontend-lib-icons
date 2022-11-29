import React, { FC, memo } from 'react';
import ClockTimeFourSvg from '../svg/clock-time-four.svg';

export interface IClockTimeFourIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeFourIcon: FC<IClockTimeFourIconProps> = memo(props => {
  return <ClockTimeFourSvg {...props} />;
});
