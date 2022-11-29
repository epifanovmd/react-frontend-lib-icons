import React, { FC, memo } from 'react';
import TimelineCheckSvg from '../svg/timeline-check.svg';

export interface ITimelineCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineCheckIcon: FC<ITimelineCheckIconProps> = memo(props => {
  return <TimelineCheckSvg {...props} />;
});
