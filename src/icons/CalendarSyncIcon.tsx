import React, { FC, memo } from 'react';
import CalendarSyncSvg from '../svg/calendar-sync.svg';

export interface ICalendarSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarSyncIcon: FC<ICalendarSyncIconProps> = memo(props => {
  return <CalendarSyncSvg {...props} />;
});
