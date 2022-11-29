import React, { FC, memo } from 'react';
import TimelineMinusOutlineSvg from '../svg/timeline-minus-outline.svg';

export interface ITimelineMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineMinusOutlineIcon: FC<ITimelineMinusOutlineIconProps> = memo(props => {
  return <TimelineMinusOutlineSvg {...props} />;
});
