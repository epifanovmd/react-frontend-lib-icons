import React, { FC, memo } from 'react';
import CalendarLockOpenOutlineSvg from '../svg/calendar-lock-open-outline.svg';

export interface ICalendarLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarLockOpenOutlineIcon: FC<ICalendarLockOpenOutlineIconProps> = memo(props => {
  return <CalendarLockOpenOutlineSvg {...props} />;
});
