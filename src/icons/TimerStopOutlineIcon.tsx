import React, { FC, memo } from 'react';
import TimerStopOutlineSvg from '../svg/timer-stop-outline.svg';

export interface ITimerStopOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerStopOutlineIcon: FC<ITimerStopOutlineIconProps> = memo(props => {
  return <TimerStopOutlineSvg {...props} />;
});
