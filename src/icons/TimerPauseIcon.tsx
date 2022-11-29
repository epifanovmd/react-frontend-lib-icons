import React, { FC, memo } from 'react';
import TimerPauseSvg from '../svg/timer-pause.svg';

export interface ITimerPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerPauseIcon: FC<ITimerPauseIconProps> = memo(props => {
  return <TimerPauseSvg {...props} />;
});
