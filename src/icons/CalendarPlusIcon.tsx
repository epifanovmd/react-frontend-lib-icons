import React, { FC, memo } from 'react';
import CalendarPlusSvg from '../svg/calendar-plus.svg';

export interface ICalendarPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarPlusIcon: FC<ICalendarPlusIconProps> = memo(props => {
  return <CalendarPlusSvg {...props} />;
});
