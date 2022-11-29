import React, { FC, memo } from 'react';
import TimelineQuestionSvg from '../svg/timeline-question.svg';

export interface ITimelineQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineQuestionIcon: FC<ITimelineQuestionIconProps> = memo(props => {
  return <TimelineQuestionSvg {...props} />;
});
