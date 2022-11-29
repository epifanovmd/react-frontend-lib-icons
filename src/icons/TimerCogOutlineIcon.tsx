import React, { FC, memo } from 'react';
import TimerCogOutlineSvg from '../svg/timer-cog-outline.svg';

export interface ITimerCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerCogOutlineIcon: FC<ITimerCogOutlineIconProps> = memo(props => {
  return <TimerCogOutlineSvg {...props} />;
});
