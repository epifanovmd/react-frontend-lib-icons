import React, { FC, memo } from 'react';
import TimerMarkerOutlineSvg from '../svg/timer-marker-outline.svg';

export interface ITimerMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerMarkerOutlineIcon: FC<ITimerMarkerOutlineIconProps> = memo(props => {
  return <TimerMarkerOutlineSvg {...props} />;
});
