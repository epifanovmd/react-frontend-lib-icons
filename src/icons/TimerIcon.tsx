import React, { FC, memo } from 'react';
import TimerSvg from '../svg/timer.svg';

export interface ITimerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerIcon: FC<ITimerIconProps> = memo(props => {
  return <TimerSvg {...props} />;
});
