import React, { FC, memo } from 'react';
import CalendarWeekOutlineSvg from '../svg/calendar-week-outline.svg';

export interface ICalendarWeekOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarWeekOutlineIcon: FC<ICalendarWeekOutlineIconProps> = memo(props => {
  return <CalendarWeekOutlineSvg {...props} />;
});
