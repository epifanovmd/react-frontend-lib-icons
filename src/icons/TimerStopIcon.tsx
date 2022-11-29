import React, { FC, memo } from 'react';
import TimerStopSvg from '../svg/timer-stop.svg';

export interface ITimerStopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerStopIcon: FC<ITimerStopIconProps> = memo(props => {
  return <TimerStopSvg {...props} />;
});
