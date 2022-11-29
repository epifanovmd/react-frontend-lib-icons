import React, { FC, memo } from 'react';
import CalendarWeekendSvg from '../svg/calendar-weekend.svg';

export interface ICalendarWeekendIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarWeekendIcon: FC<ICalendarWeekendIconProps> = memo(props => {
  return <CalendarWeekendSvg {...props} />;
});
