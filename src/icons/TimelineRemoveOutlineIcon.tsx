import React, { FC, memo } from 'react';
import TimelineRemoveOutlineSvg from '../svg/timeline-remove-outline.svg';

export interface ITimelineRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineRemoveOutlineIcon: FC<ITimelineRemoveOutlineIconProps> = memo(props => {
  return <TimelineRemoveOutlineSvg {...props} />;
});
