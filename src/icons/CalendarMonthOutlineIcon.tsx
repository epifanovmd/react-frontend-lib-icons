import React, { FC, memo } from 'react';
import CalendarMonthOutlineSvg from '../svg/calendar-month-outline.svg';

export interface ICalendarMonthOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarMonthOutlineIcon: FC<ICalendarMonthOutlineIconProps> = memo(props => {
  return <CalendarMonthOutlineSvg {...props} />;
});
