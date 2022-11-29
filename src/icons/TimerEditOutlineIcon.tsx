import React, { FC, memo } from 'react';
import TimerEditOutlineSvg from '../svg/timer-edit-outline.svg';

export interface ITimerEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerEditOutlineIcon: FC<ITimerEditOutlineIconProps> = memo(props => {
  return <TimerEditOutlineSvg {...props} />;
});
