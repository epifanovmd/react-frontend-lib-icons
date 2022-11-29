import React, { FC, memo } from 'react';
import CalendarQuestionSvg from '../svg/calendar-question.svg';

export interface ICalendarQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarQuestionIcon: FC<ICalendarQuestionIconProps> = memo(props => {
  return <CalendarQuestionSvg {...props} />;
});
