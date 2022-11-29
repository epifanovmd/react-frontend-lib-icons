import React, { FC, memo } from 'react';
import CalendarLockOutlineSvg from '../svg/calendar-lock-outline.svg';

export interface ICalendarLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarLockOutlineIcon: FC<ICalendarLockOutlineIconProps> = memo(props => {
  return <CalendarLockOutlineSvg {...props} />;
});
