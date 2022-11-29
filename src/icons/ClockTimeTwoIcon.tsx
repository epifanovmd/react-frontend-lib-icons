import React, { FC, memo } from 'react';
import ClockTimeTwoSvg from '../svg/clock-time-two.svg';

export interface IClockTimeTwoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeTwoIcon: FC<IClockTimeTwoIconProps> = memo(props => {
  return <ClockTimeTwoSvg {...props} />;
});
