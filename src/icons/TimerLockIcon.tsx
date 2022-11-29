import React, { FC, memo } from 'react';
import TimerLockSvg from '../svg/timer-lock.svg';

export interface ITimerLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerLockIcon: FC<ITimerLockIconProps> = memo(props => {
  return <TimerLockSvg {...props} />;
});
