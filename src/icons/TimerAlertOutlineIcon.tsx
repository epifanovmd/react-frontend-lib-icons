import React, { FC, memo } from 'react';
import TimerAlertOutlineSvg from '../svg/timer-alert-outline.svg';

export interface ITimerAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerAlertOutlineIcon: FC<ITimerAlertOutlineIconProps> = memo(props => {
  return <TimerAlertOutlineSvg {...props} />;
});
