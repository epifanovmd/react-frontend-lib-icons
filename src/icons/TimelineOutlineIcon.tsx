import React, { FC, memo } from 'react';
import TimelineOutlineSvg from '../svg/timeline-outline.svg';

export interface ITimelineOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineOutlineIcon: FC<ITimelineOutlineIconProps> = memo(props => {
  return <TimelineOutlineSvg {...props} />;
});
