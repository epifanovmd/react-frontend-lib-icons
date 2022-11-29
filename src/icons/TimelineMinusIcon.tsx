import React, { FC, memo } from 'react';
import TimelineMinusSvg from '../svg/timeline-minus.svg';

export interface ITimelineMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineMinusIcon: FC<ITimelineMinusIconProps> = memo(props => {
  return <TimelineMinusSvg {...props} />;
});
