import React, { FC, memo } from 'react';
import CalendarLockSvg from '../svg/calendar-lock.svg';

export interface ICalendarLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarLockIcon: FC<ICalendarLockIconProps> = memo(props => {
  return <CalendarLockSvg {...props} />;
});
