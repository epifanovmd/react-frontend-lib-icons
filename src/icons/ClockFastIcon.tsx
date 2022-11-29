import React, { FC, memo } from 'react';
import ClockFastSvg from '../svg/clock-fast.svg';

export interface IClockFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockFastIcon: FC<IClockFastIconProps> = memo(props => {
  return <ClockFastSvg {...props} />;
});
