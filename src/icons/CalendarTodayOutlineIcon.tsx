import React, { FC, memo } from 'react';
import CalendarTodayOutlineSvg from '../svg/calendar-today-outline.svg';

export interface ICalendarTodayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarTodayOutlineIcon: FC<ICalendarTodayOutlineIconProps> = memo(props => {
  return <CalendarTodayOutlineSvg {...props} />;
});
