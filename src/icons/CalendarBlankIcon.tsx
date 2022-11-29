import React, { FC, memo } from 'react';
import CalendarBlankSvg from '../svg/calendar-blank.svg';

export interface ICalendarBlankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarBlankIcon: FC<ICalendarBlankIconProps> = memo(props => {
  return <CalendarBlankSvg {...props} />;
});
