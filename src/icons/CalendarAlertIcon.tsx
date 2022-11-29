import React, { FC, memo } from 'react';
import CalendarAlertSvg from '../svg/calendar-alert.svg';

export interface ICalendarAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarAlertIcon: FC<ICalendarAlertIconProps> = memo(props => {
  return <CalendarAlertSvg {...props} />;
});
