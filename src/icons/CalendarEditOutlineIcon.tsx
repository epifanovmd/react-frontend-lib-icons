import React, { FC, memo } from 'react';
import CalendarEditOutlineSvg from '../svg/calendar-edit-outline.svg';

export interface ICalendarEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarEditOutlineIcon: FC<ICalendarEditOutlineIconProps> = memo(props => {
  return <CalendarEditOutlineSvg {...props} />;
});
