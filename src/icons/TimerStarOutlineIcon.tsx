import React, { FC, memo } from 'react';
import TimerStarOutlineSvg from '../svg/timer-star-outline.svg';

export interface ITimerStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerStarOutlineIcon: FC<ITimerStarOutlineIconProps> = memo(props => {
  return <TimerStarOutlineSvg {...props} />;
});
