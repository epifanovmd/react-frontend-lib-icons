import React, { FC, memo } from 'react';
import TimerOffSvg from '../svg/timer-off.svg';

export interface ITimerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerOffIcon: FC<ITimerOffIconProps> = memo(props => {
  return <TimerOffSvg {...props} />;
});
