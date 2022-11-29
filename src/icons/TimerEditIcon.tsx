import React, { FC, memo } from 'react';
import TimerEditSvg from '../svg/timer-edit.svg';

export interface ITimerEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerEditIcon: FC<ITimerEditIconProps> = memo(props => {
  return <TimerEditSvg {...props} />;
});
