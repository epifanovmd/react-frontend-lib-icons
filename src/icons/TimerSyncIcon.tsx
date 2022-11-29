import React, { FC, memo } from 'react';
import TimerSyncSvg from '../svg/timer-sync.svg';

export interface ITimerSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSyncIcon: FC<ITimerSyncIconProps> = memo(props => {
  return <TimerSyncSvg {...props} />;
});
