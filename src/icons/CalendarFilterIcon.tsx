import React, { FC, memo } from 'react';
import CalendarFilterSvg from '../svg/calendar-filter.svg';

export interface ICalendarFilterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarFilterIcon: FC<ICalendarFilterIconProps> = memo(props => {
  return <CalendarFilterSvg {...props} />;
});
