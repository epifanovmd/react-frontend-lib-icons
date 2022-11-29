import React, { FC, memo } from 'react';
import CalendarCollapseHorizontalOutlineSvg from '../svg/calendar-collapse-horizontal-outline.svg';

export interface ICalendarCollapseHorizontalOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarCollapseHorizontalOutlineIcon: FC<ICalendarCollapseHorizontalOutlineIconProps> = memo(props => {
  return <CalendarCollapseHorizontalOutlineSvg {...props} />;
});
