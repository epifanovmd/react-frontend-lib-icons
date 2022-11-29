import React, { FC, memo } from 'react';
import CalendarMinusSvg from '../svg/calendar-minus.svg';

export interface ICalendarMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarMinusIcon: FC<ICalendarMinusIconProps> = memo(props => {
  return <CalendarMinusSvg {...props} />;
});
