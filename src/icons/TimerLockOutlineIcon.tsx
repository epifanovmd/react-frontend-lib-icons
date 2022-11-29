import React, { FC, memo } from 'react';
import TimerLockOutlineSvg from '../svg/timer-lock-outline.svg';

export interface ITimerLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerLockOutlineIcon: FC<ITimerLockOutlineIconProps> = memo(props => {
  return <TimerLockOutlineSvg {...props} />;
});
