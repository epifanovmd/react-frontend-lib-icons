import React, { FC, memo } from 'react';
import CalendarTodaySvg from '../svg/calendar-today.svg';

export interface ICalendarTodayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarTodayIcon: FC<ICalendarTodayIconProps> = memo(props => {
  return <CalendarTodaySvg {...props} />;
});
