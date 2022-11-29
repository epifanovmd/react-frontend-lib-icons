import React, { FC, memo } from 'react';
import CalendarAccountOutlineSvg from '../svg/calendar-account-outline.svg';

export interface ICalendarAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarAccountOutlineIcon: FC<ICalendarAccountOutlineIconProps> = memo(props => {
  return <CalendarAccountOutlineSvg {...props} />;
});
