import React, { FC, memo } from 'react';
import TimelineTextSvg from '../svg/timeline-text.svg';

export interface ITimelineTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineTextIcon: FC<ITimelineTextIconProps> = memo(props => {
  return <TimelineTextSvg {...props} />;
});
