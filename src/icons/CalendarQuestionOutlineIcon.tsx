import React, { FC, memo } from 'react';
import CalendarQuestionOutlineSvg from '../svg/calendar-question-outline.svg';

export interface ICalendarQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarQuestionOutlineIcon: FC<ICalendarQuestionOutlineIconProps> = memo(props => {
  return <CalendarQuestionOutlineSvg {...props} />;
});
