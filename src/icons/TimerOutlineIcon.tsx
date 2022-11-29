import React, { FC, memo } from 'react';
import TimerOutlineSvg from '../svg/timer-outline.svg';

export interface ITimerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerOutlineIcon: FC<ITimerOutlineIconProps> = memo(props => {
  return <TimerOutlineSvg {...props} />;
});
