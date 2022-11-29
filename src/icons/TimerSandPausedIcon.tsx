import React, { FC, memo } from 'react';
import TimerSandPausedSvg from '../svg/timer-sand-paused.svg';

export interface ITimerSandPausedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSandPausedIcon: FC<ITimerSandPausedIconProps> = memo(props => {
  return <TimerSandPausedSvg {...props} />;
});
