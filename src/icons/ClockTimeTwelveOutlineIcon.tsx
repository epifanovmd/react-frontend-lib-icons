import React, { FC, memo } from 'react';
import ClockTimeTwelveOutlineSvg from '../svg/clock-time-twelve-outline.svg';

export interface IClockTimeTwelveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeTwelveOutlineIcon: FC<IClockTimeTwelveOutlineIconProps> = memo(props => {
  return <ClockTimeTwelveOutlineSvg {...props} />;
});
