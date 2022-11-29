import React, { FC, memo } from 'react';
import CalendarArrowRightSvg from '../svg/calendar-arrow-right.svg';

export interface ICalendarArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarArrowRightIcon: FC<ICalendarArrowRightIconProps> = memo(props => {
  return <CalendarArrowRightSvg {...props} />;
});
