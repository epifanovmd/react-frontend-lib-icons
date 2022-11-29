import React, { FC, memo } from 'react';
import ClockInSvg from '../svg/clock-in.svg';

export interface IClockInIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockInIcon: FC<IClockInIconProps> = memo(props => {
  return <ClockInSvg {...props} />;
});
