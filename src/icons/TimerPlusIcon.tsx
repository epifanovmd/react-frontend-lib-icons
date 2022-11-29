import React, { FC, memo } from 'react';
import TimerPlusSvg from '../svg/timer-plus.svg';

export interface ITimerPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerPlusIcon: FC<ITimerPlusIconProps> = memo(props => {
  return <TimerPlusSvg {...props} />;
});
