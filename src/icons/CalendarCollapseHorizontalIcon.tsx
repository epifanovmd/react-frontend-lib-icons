import React, { FC, memo } from 'react';
import CalendarCollapseHorizontalSvg from '../svg/calendar-collapse-horizontal.svg';

export interface ICalendarCollapseHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarCollapseHorizontalIcon: FC<ICalendarCollapseHorizontalIconProps> = memo(props => {
  return <CalendarCollapseHorizontalSvg {...props} />;
});
