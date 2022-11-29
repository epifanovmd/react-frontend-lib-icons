import React, { FC, memo } from 'react';
import CalendarSyncOutlineSvg from '../svg/calendar-sync-outline.svg';

export interface ICalendarSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarSyncOutlineIcon: FC<ICalendarSyncOutlineIconProps> = memo(props => {
  return <CalendarSyncOutlineSvg {...props} />;
});
