import React, { FC, memo } from 'react';
import TimerRemoveSvg from '../svg/timer-remove.svg';

export interface ITimerRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerRemoveIcon: FC<ITimerRemoveIconProps> = memo(props => {
  return <TimerRemoveSvg {...props} />;
});
