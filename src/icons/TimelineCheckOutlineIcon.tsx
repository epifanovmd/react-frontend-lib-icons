import React, { FC, memo } from 'react';
import TimelineCheckOutlineSvg from '../svg/timeline-check-outline.svg';

export interface ITimelineCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineCheckOutlineIcon: FC<ITimelineCheckOutlineIconProps> = memo(props => {
  return <TimelineCheckOutlineSvg {...props} />;
});
