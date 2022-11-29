import React, { FC, memo } from 'react';
import TimerMusicSvg from '../svg/timer-music.svg';

export interface ITimerMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerMusicIcon: FC<ITimerMusicIconProps> = memo(props => {
  return <TimerMusicSvg {...props} />;
});
