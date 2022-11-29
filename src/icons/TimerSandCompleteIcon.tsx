import React, { FC, memo } from 'react';
import TimerSandCompleteSvg from '../svg/timer-sand-complete.svg';

export interface ITimerSandCompleteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSandCompleteIcon: FC<ITimerSandCompleteIconProps> = memo(props => {
  return <TimerSandCompleteSvg {...props} />;
});
