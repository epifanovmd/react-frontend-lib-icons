import React, { FC, memo } from 'react';
import CalendarRefreshSvg from '../svg/calendar-refresh.svg';

export interface ICalendarRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarRefreshIcon: FC<ICalendarRefreshIconProps> = memo(props => {
  return <CalendarRefreshSvg {...props} />;
});
