import React, { FC, memo } from 'react';
import TimerLockOpenOutlineSvg from '../svg/timer-lock-open-outline.svg';

export interface ITimerLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerLockOpenOutlineIcon: FC<ITimerLockOpenOutlineIconProps> = memo(props => {
  return <TimerLockOpenOutlineSvg {...props} />;
});
