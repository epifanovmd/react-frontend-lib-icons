import React, { FC, memo } from 'react';
import ClockTimeTwoOutlineSvg from '../svg/clock-time-two-outline.svg';

export interface IClockTimeTwoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeTwoOutlineIcon: FC<IClockTimeTwoOutlineIconProps> = memo(props => {
  return <ClockTimeTwoOutlineSvg {...props} />;
});
