import React, { FC, memo } from 'react';
import ClockAlertSvg from '../svg/clock-alert.svg';

export interface IClockAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockAlertIcon: FC<IClockAlertIconProps> = memo(props => {
  return <ClockAlertSvg {...props} />;
});
