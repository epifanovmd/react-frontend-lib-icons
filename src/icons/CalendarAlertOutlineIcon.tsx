import React, { FC, memo } from 'react';
import CalendarAlertOutlineSvg from '../svg/calendar-alert-outline.svg';

export interface ICalendarAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarAlertOutlineIcon: FC<ICalendarAlertOutlineIconProps> = memo(props => {
  return <CalendarAlertOutlineSvg {...props} />;
});
