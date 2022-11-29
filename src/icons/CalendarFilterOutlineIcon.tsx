import React, { FC, memo } from 'react';
import CalendarFilterOutlineSvg from '../svg/calendar-filter-outline.svg';

export interface ICalendarFilterOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarFilterOutlineIcon: FC<ICalendarFilterOutlineIconProps> = memo(props => {
  return <CalendarFilterOutlineSvg {...props} />;
});
