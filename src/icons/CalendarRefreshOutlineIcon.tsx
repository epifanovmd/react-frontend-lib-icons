import React, { FC, memo } from 'react';
import CalendarRefreshOutlineSvg from '../svg/calendar-refresh-outline.svg';

export interface ICalendarRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarRefreshOutlineIcon: FC<ICalendarRefreshOutlineIconProps> = memo(props => {
  return <CalendarRefreshOutlineSvg {...props} />;
});
