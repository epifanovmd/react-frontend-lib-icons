import React, { FC, memo } from 'react';
import CalendarMultipleSvg from '../svg/calendar-multiple.svg';

export interface ICalendarMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarMultipleIcon: FC<ICalendarMultipleIconProps> = memo(props => {
  return <CalendarMultipleSvg {...props} />;
});
