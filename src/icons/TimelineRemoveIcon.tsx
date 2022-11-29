import React, { FC, memo } from 'react';
import TimelineRemoveSvg from '../svg/timeline-remove.svg';

export interface ITimelineRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineRemoveIcon: FC<ITimelineRemoveIconProps> = memo(props => {
  return <TimelineRemoveSvg {...props} />;
});
