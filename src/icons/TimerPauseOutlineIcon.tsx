import React, { FC, memo } from 'react';
import TimerPauseOutlineSvg from '../svg/timer-pause-outline.svg';

export interface ITimerPauseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerPauseOutlineIcon: FC<ITimerPauseOutlineIconProps> = memo(props => {
  return <TimerPauseOutlineSvg {...props} />;
});
