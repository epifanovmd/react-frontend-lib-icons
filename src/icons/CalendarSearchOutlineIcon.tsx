import React, { FC, memo } from 'react';
import CalendarSearchOutlineSvg from '../svg/calendar-search-outline.svg';

export interface ICalendarSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarSearchOutlineIcon: FC<ICalendarSearchOutlineIconProps> = memo(props => {
  return <CalendarSearchOutlineSvg {...props} />;
});
