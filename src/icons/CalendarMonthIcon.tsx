import React, { FC, memo } from 'react';
import CalendarMonthSvg from '../svg/calendar-month.svg';

export interface ICalendarMonthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarMonthIcon: FC<ICalendarMonthIconProps> = memo(props => {
  return <CalendarMonthSvg {...props} />;
});
