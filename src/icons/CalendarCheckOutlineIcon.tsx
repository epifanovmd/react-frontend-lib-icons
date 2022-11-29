import React, { FC, memo } from 'react';
import CalendarCheckOutlineSvg from '../svg/calendar-check-outline.svg';

export interface ICalendarCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarCheckOutlineIcon: FC<ICalendarCheckOutlineIconProps> = memo(props => {
  return <CalendarCheckOutlineSvg {...props} />;
});
