import React, { FC, memo } from 'react';
import CalendarMultipleCheckSvg from '../svg/calendar-multiple-check.svg';

export interface ICalendarMultipleCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarMultipleCheckIcon: FC<ICalendarMultipleCheckIconProps> = memo(props => {
  return <CalendarMultipleCheckSvg {...props} />;
});
