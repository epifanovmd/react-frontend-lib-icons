import React, { FC, memo } from 'react';
import CalendarWeekendOutlineSvg from '../svg/calendar-weekend-outline.svg';

export interface ICalendarWeekendOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarWeekendOutlineIcon: FC<ICalendarWeekendOutlineIconProps> = memo(props => {
  return <CalendarWeekendOutlineSvg {...props} />;
});
