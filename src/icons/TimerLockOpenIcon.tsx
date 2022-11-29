import React, { FC, memo } from 'react';
import TimerLockOpenSvg from '../svg/timer-lock-open.svg';

export interface ITimerLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerLockOpenIcon: FC<ITimerLockOpenIconProps> = memo(props => {
  return <TimerLockOpenSvg {...props} />;
});
