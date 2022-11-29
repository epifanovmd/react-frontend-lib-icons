import React, { FC, memo } from 'react';
import CalendarAccountSvg from '../svg/calendar-account.svg';

export interface ICalendarAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarAccountIcon: FC<ICalendarAccountIconProps> = memo(props => {
  return <CalendarAccountSvg {...props} />;
});
