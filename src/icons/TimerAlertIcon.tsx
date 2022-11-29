import React, { FC, memo } from 'react';
import TimerAlertSvg from '../svg/timer-alert.svg';

export interface ITimerAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerAlertIcon: FC<ITimerAlertIconProps> = memo(props => {
  return <TimerAlertSvg {...props} />;
});
