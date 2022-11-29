import React, { FC, memo } from 'react';
import TimerPlayOutlineSvg from '../svg/timer-play-outline.svg';

export interface ITimerPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerPlayOutlineIcon: FC<ITimerPlayOutlineIconProps> = memo(props => {
  return <TimerPlayOutlineSvg {...props} />;
});
