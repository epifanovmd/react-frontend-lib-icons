import React, { FC, memo } from 'react';
import TimelineAlertOutlineSvg from '../svg/timeline-alert-outline.svg';

export interface ITimelineAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineAlertOutlineIcon: FC<ITimelineAlertOutlineIconProps> = memo(props => {
  return <TimelineAlertOutlineSvg {...props} />;
});
