import React, { FC, memo } from 'react';
import TimerCancelOutlineSvg from '../svg/timer-cancel-outline.svg';

export interface ITimerCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerCancelOutlineIcon: FC<ITimerCancelOutlineIconProps> = memo(props => {
  return <TimerCancelOutlineSvg {...props} />;
});
