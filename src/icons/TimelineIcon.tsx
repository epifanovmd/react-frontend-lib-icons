import React, { FC, memo } from 'react';
import TimelineSvg from '../svg/timeline.svg';

export interface ITimelineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineIcon: FC<ITimelineIconProps> = memo(props => {
  return <TimelineSvg {...props} />;
});
