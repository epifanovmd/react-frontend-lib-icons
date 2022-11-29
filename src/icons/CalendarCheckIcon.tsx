import React, { FC, memo } from 'react';
import CalendarCheckSvg from '../svg/calendar-check.svg';

export interface ICalendarCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarCheckIcon: FC<ICalendarCheckIconProps> = memo(props => {
  return <CalendarCheckSvg {...props} />;
});
