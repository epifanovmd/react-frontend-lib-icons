import React, { FC, memo } from 'react';
import CalendarExpandHorizontalOutlineSvg from '../svg/calendar-expand-horizontal-outline.svg';

export interface ICalendarExpandHorizontalOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarExpandHorizontalOutlineIcon: FC<ICalendarExpandHorizontalOutlineIconProps> = memo(props => {
  return <CalendarExpandHorizontalOutlineSvg {...props} />;
});
