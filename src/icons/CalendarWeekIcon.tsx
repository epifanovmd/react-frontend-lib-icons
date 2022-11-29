import React, { FC, memo } from 'react';
import CalendarWeekSvg from '../svg/calendar-week.svg';

export interface ICalendarWeekIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarWeekIcon: FC<ICalendarWeekIconProps> = memo(props => {
  return <CalendarWeekSvg {...props} />;
});
