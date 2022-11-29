import React, { FC, memo } from 'react';
import ClockOutSvg from '../svg/clock-out.svg';

export interface IClockOutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockOutIcon: FC<IClockOutIconProps> = memo(props => {
  return <ClockOutSvg {...props} />;
});
