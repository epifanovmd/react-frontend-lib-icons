import React, { FC, memo } from 'react';
import TimerSandEmptySvg from '../svg/timer-sand-empty.svg';

export interface ITimerSandEmptyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSandEmptyIcon: FC<ITimerSandEmptyIconProps> = memo(props => {
  return <TimerSandEmptySvg {...props} />;
});
