import React, { FC, memo } from 'react';
import TimelineAlertSvg from '../svg/timeline-alert.svg';

export interface ITimelineAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineAlertIcon: FC<ITimelineAlertIconProps> = memo(props => {
  return <TimelineAlertSvg {...props} />;
});
