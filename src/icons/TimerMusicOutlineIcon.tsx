import React, { FC, memo } from 'react';
import TimerMusicOutlineSvg from '../svg/timer-music-outline.svg';

export interface ITimerMusicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerMusicOutlineIcon: FC<ITimerMusicOutlineIconProps> = memo(props => {
  return <TimerMusicOutlineSvg {...props} />;
});
