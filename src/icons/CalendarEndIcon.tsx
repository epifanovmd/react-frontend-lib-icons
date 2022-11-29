import React, { FC, memo } from 'react';
import CalendarEndSvg from '../svg/calendar-end.svg';

export interface ICalendarEndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarEndIcon: FC<ICalendarEndIconProps> = memo(props => {
  return <CalendarEndSvg {...props} />;
});
