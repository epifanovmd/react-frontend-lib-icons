import React, { FC, memo } from 'react';
import CalendarLockOpenSvg from '../svg/calendar-lock-open.svg';

export interface ICalendarLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarLockOpenIcon: FC<ICalendarLockOpenIconProps> = memo(props => {
  return <CalendarLockOpenSvg {...props} />;
});
