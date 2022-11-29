import React, { FC, memo } from 'react';
import TimelineQuestionOutlineSvg from '../svg/timeline-question-outline.svg';

export interface ITimelineQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineQuestionOutlineIcon: FC<ITimelineQuestionOutlineIconProps> = memo(props => {
  return <TimelineQuestionOutlineSvg {...props} />;
});
