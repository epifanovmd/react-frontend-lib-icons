import React, { FC, memo } from 'react';
import TimerStarSvg from '../svg/timer-star.svg';

export interface ITimerStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerStarIcon: FC<ITimerStarIconProps> = memo(props => {
  return <TimerStarSvg {...props} />;
});
