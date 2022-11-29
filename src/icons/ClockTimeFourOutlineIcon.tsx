import React, { FC, memo } from 'react';
import ClockTimeFourOutlineSvg from '../svg/clock-time-four-outline.svg';

export interface IClockTimeFourOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeFourOutlineIcon: FC<IClockTimeFourOutlineIconProps> = memo(props => {
  return <ClockTimeFourOutlineSvg {...props} />;
});
