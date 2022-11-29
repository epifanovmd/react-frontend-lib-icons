import React, { FC, memo } from 'react';
import CalendarTextSvg from '../svg/calendar-text.svg';

export interface ICalendarTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarTextIcon: FC<ICalendarTextIconProps> = memo(props => {
  return <CalendarTextSvg {...props} />;
});
