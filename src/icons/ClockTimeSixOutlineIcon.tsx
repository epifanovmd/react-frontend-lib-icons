import React, { FC, memo } from 'react';
import ClockTimeSixOutlineSvg from '../svg/clock-time-six-outline.svg';

export interface IClockTimeSixOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeSixOutlineIcon: FC<IClockTimeSixOutlineIconProps> = memo(props => {
  return <ClockTimeSixOutlineSvg {...props} />;
});
