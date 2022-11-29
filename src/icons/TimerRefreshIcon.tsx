import React, { FC, memo } from 'react';
import TimerRefreshSvg from '../svg/timer-refresh.svg';

export interface ITimerRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerRefreshIcon: FC<ITimerRefreshIconProps> = memo(props => {
  return <TimerRefreshSvg {...props} />;
});
