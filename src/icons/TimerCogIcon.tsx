import React, { FC, memo } from 'react';
import TimerCogSvg from '../svg/timer-cog.svg';

export interface ITimerCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerCogIcon: FC<ITimerCogIconProps> = memo(props => {
  return <TimerCogSvg {...props} />;
});
