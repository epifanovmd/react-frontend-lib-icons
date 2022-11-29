import React, { FC, memo } from 'react';
import TimerMarkerSvg from '../svg/timer-marker.svg';

export interface ITimerMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerMarkerIcon: FC<ITimerMarkerIconProps> = memo(props => {
  return <TimerMarkerSvg {...props} />;
});
