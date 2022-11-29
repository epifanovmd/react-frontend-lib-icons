import React, { FC, memo } from 'react';
import TimerMinusOutlineSvg from '../svg/timer-minus-outline.svg';

export interface ITimerMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerMinusOutlineIcon: FC<ITimerMinusOutlineIconProps> = memo(props => {
  return <TimerMinusOutlineSvg {...props} />;
});
