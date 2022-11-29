import React, { FC, memo } from 'react';
import CalendarWeekBeginOutlineSvg from '../svg/calendar-week-begin-outline.svg';

export interface ICalendarWeekBeginOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarWeekBeginOutlineIcon: FC<ICalendarWeekBeginOutlineIconProps> = memo(props => {
  return <CalendarWeekBeginOutlineSvg {...props} />;
});
