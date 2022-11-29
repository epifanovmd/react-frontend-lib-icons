import React, { FC, memo } from 'react';
import CalendarTextOutlineSvg from '../svg/calendar-text-outline.svg';

export interface ICalendarTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarTextOutlineIcon: FC<ICalendarTextOutlineIconProps> = memo(props => {
  return <CalendarTextOutlineSvg {...props} />;
});
