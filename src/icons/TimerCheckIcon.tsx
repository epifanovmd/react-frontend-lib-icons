import React, { FC, memo } from 'react';
import TimerCheckSvg from '../svg/timer-check.svg';

export interface ITimerCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerCheckIcon: FC<ITimerCheckIconProps> = memo(props => {
  return <TimerCheckSvg {...props} />;
});
