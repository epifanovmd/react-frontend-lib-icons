import React, { FC, memo } from 'react';
import TimerSyncOutlineSvg from '../svg/timer-sync-outline.svg';

export interface ITimerSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSyncOutlineIcon: FC<ITimerSyncOutlineIconProps> = memo(props => {
  return <TimerSyncOutlineSvg {...props} />;
});
