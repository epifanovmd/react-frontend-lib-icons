import React, { FC, memo } from 'react';
import CalendarEditSvg from '../svg/calendar-edit.svg';

export interface ICalendarEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarEditIcon: FC<ICalendarEditIconProps> = memo(props => {
  return <CalendarEditSvg {...props} />;
});
