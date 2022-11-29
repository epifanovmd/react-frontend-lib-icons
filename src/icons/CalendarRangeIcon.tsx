import React, { FC, memo } from 'react';
import CalendarRangeSvg from '../svg/calendar-range.svg';

export interface ICalendarRangeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarRangeIcon: FC<ICalendarRangeIconProps> = memo(props => {
  return <CalendarRangeSvg {...props} />;
});
