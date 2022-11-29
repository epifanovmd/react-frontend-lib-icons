import React, { FC, memo } from 'react';
import CalendarClockSvg from '../svg/calendar-clock.svg';

export interface ICalendarClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarClockIcon: FC<ICalendarClockIconProps> = memo(props => {
  return <CalendarClockSvg {...props} />;
});
