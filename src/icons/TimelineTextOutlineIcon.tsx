import React, { FC, memo } from 'react';
import TimelineTextOutlineSvg from '../svg/timeline-text-outline.svg';

export interface ITimelineTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineTextOutlineIcon: FC<ITimelineTextOutlineIconProps> = memo(props => {
  return <TimelineTextOutlineSvg {...props} />;
});
