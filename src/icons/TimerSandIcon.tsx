import React, { FC, memo } from 'react';
import TimerSandSvg from '../svg/timer-sand.svg';

export interface ITimerSandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSandIcon: FC<ITimerSandIconProps> = memo(props => {
  return <TimerSandSvg {...props} />;
});
