import React, { FC, memo } from 'react';
import CalendarSearchSvg from '../svg/calendar-search.svg';

export interface ICalendarSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarSearchIcon: FC<ICalendarSearchIconProps> = memo(props => {
  return <CalendarSearchSvg {...props} />;
});
