import React, { FC, memo } from 'react';
import TimerRemoveOutlineSvg from '../svg/timer-remove-outline.svg';

export interface ITimerRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerRemoveOutlineIcon: FC<ITimerRemoveOutlineIconProps> = memo(props => {
  return <TimerRemoveOutlineSvg {...props} />;
});
