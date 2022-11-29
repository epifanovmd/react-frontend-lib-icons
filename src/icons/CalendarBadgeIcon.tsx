import React, { FC, memo } from 'react';
import CalendarBadgeSvg from '../svg/calendar-badge.svg';

export interface ICalendarBadgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarBadgeIcon: FC<ICalendarBadgeIconProps> = memo(props => {
  return <CalendarBadgeSvg {...props} />;
});
