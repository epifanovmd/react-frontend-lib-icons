import React, { FC, memo } from 'react';
import ClockTimeSixSvg from '../svg/clock-time-six.svg';

export interface IClockTimeSixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeSixIcon: FC<IClockTimeSixIconProps> = memo(props => {
  return <ClockTimeSixSvg {...props} />;
});
