import React, { FC, memo } from 'react';
import TimerRefreshOutlineSvg from '../svg/timer-refresh-outline.svg';

export interface ITimerRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerRefreshOutlineIcon: FC<ITimerRefreshOutlineIconProps> = memo(props => {
  return <TimerRefreshOutlineSvg {...props} />;
});
