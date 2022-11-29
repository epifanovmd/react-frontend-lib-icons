import React, { FC, memo } from 'react';
import CalendarWeekBeginSvg from '../svg/calendar-week-begin.svg';

export interface ICalendarWeekBeginIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarWeekBeginIcon: FC<ICalendarWeekBeginIconProps> = memo(props => {
  return <CalendarWeekBeginSvg {...props} />;
});
