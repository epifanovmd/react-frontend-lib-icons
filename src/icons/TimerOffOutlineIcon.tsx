import React, { FC, memo } from 'react';
import TimerOffOutlineSvg from '../svg/timer-off-outline.svg';

export interface ITimerOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerOffOutlineIcon: FC<ITimerOffOutlineIconProps> = memo(props => {
  return <TimerOffOutlineSvg {...props} />;
});
