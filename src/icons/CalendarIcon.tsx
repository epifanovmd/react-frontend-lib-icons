import React, { FC, memo } from 'react';
import CalendarSvg from '../svg/calendar.svg';

export interface ICalendarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarIcon: FC<ICalendarIconProps> = memo(props => {
  return <CalendarSvg {...props} />;
});
