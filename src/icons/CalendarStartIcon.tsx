import React, { FC, memo } from 'react';
import CalendarStartSvg from '../svg/calendar-start.svg';

export interface ICalendarStartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarStartIcon: FC<ICalendarStartIconProps> = memo(props => {
  return <CalendarStartSvg {...props} />;
});
