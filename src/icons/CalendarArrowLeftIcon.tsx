import React, { FC, memo } from 'react';
import CalendarArrowLeftSvg from '../svg/calendar-arrow-left.svg';

export interface ICalendarArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarArrowLeftIcon: FC<ICalendarArrowLeftIconProps> = memo(props => {
  return <CalendarArrowLeftSvg {...props} />;
});
