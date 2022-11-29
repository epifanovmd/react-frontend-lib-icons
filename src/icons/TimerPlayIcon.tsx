import React, { FC, memo } from 'react';
import TimerPlaySvg from '../svg/timer-play.svg';

export interface ITimerPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerPlayIcon: FC<ITimerPlayIconProps> = memo(props => {
  return <TimerPlaySvg {...props} />;
});
