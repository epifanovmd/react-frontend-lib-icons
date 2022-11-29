import React, { FC, memo } from 'react';
import ClockCheckOutlineSvg from '../svg/clock-check-outline.svg';

export interface IClockCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockCheckOutlineIcon: FC<IClockCheckOutlineIconProps> = memo(props => {
  return <ClockCheckOutlineSvg {...props} />;
});
