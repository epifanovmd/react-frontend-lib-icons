import React, { FC, memo } from 'react';
import TimelineClockSvg from '../svg/timeline-clock.svg';

export interface ITimelineClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineClockIcon: FC<ITimelineClockIconProps> = memo(props => {
  return <TimelineClockSvg {...props} />;
});
