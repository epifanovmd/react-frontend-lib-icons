import React, { FC, memo } from 'react';
import CalendarClockOutlineSvg from '../svg/calendar-clock-outline.svg';

export interface ICalendarClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarClockOutlineIcon: FC<ICalendarClockOutlineIconProps> = memo(props => {
  return <CalendarClockOutlineSvg {...props} />;
});
