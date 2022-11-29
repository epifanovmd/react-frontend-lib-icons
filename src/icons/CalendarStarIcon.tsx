import React, { FC, memo } from 'react';
import CalendarStarSvg from '../svg/calendar-star.svg';

export interface ICalendarStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarStarIcon: FC<ICalendarStarIconProps> = memo(props => {
  return <CalendarStarSvg {...props} />;
});
