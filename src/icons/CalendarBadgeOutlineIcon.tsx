import React, { FC, memo } from 'react';
import CalendarBadgeOutlineSvg from '../svg/calendar-badge-outline.svg';

export interface ICalendarBadgeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarBadgeOutlineIcon: FC<ICalendarBadgeOutlineIconProps> = memo(props => {
  return <CalendarBadgeOutlineSvg {...props} />;
});
