import React, { FC, memo } from 'react';
import TimerSandFullSvg from '../svg/timer-sand-full.svg';

export interface ITimerSandFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSandFullIcon: FC<ITimerSandFullIconProps> = memo(props => {
  return <TimerSandFullSvg {...props} />;
});
