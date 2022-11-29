import React, { FC, memo } from 'react';
import ClockTimeTenSvg from '../svg/clock-time-ten.svg';

export interface IClockTimeTenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeTenIcon: FC<IClockTimeTenIconProps> = memo(props => {
  return <ClockTimeTenSvg {...props} />;
});
