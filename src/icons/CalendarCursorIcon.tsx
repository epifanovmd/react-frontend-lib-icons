import React, { FC, memo } from 'react';
import CalendarCursorSvg from '../svg/calendar-cursor.svg';

export interface ICalendarCursorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarCursorIcon: FC<ICalendarCursorIconProps> = memo(props => {
  return <CalendarCursorSvg {...props} />;
});
