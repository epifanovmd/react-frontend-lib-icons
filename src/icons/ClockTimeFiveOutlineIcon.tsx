import React, { FC, memo } from 'react';
import ClockTimeFiveOutlineSvg from '../svg/clock-time-five-outline.svg';

export interface IClockTimeFiveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeFiveOutlineIcon: FC<IClockTimeFiveOutlineIconProps> = memo(props => {
  return <ClockTimeFiveOutlineSvg {...props} />;
});
