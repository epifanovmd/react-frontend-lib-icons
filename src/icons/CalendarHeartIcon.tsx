import React, { FC, memo } from 'react';
import CalendarHeartSvg from '../svg/calendar-heart.svg';

export interface ICalendarHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarHeartIcon: FC<ICalendarHeartIconProps> = memo(props => {
  return <CalendarHeartSvg {...props} />;
});
