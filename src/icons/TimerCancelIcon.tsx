import React, { FC, memo } from 'react';
import TimerCancelSvg from '../svg/timer-cancel.svg';

export interface ITimerCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerCancelIcon: FC<ITimerCancelIconProps> = memo(props => {
  return <TimerCancelSvg {...props} />;
});
