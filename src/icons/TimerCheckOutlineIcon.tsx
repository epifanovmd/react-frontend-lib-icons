import React, { FC, memo } from 'react';
import TimerCheckOutlineSvg from '../svg/timer-check-outline.svg';

export interface ITimerCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerCheckOutlineIcon: FC<ITimerCheckOutlineIconProps> = memo(props => {
  return <TimerCheckOutlineSvg {...props} />;
});
