import React, { FC, memo } from 'react';
import CalendarStarOutlineSvg from '../svg/calendar-star-outline.svg';

export interface ICalendarStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarStarOutlineIcon: FC<ICalendarStarOutlineIconProps> = memo(props => {
  return <CalendarStarOutlineSvg {...props} />;
});
