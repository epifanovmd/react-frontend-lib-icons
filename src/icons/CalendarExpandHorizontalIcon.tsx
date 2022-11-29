import React, { FC, memo } from 'react';
import CalendarExpandHorizontalSvg from '../svg/calendar-expand-horizontal.svg';

export interface ICalendarExpandHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarExpandHorizontalIcon: FC<ICalendarExpandHorizontalIconProps> = memo(props => {
  return <CalendarExpandHorizontalSvg {...props} />;
});
