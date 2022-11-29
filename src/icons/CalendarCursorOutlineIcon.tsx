import React, { FC, memo } from 'react';
import CalendarCursorOutlineSvg from '../svg/calendar-cursor-outline.svg';

export interface ICalendarCursorOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarCursorOutlineIcon: FC<ICalendarCursorOutlineIconProps> = memo(props => {
  return <CalendarCursorOutlineSvg {...props} />;
});
