import React, { FC, memo } from 'react';
import CalendarEndOutlineSvg from '../svg/calendar-end-outline.svg';

export interface ICalendarEndOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarEndOutlineIcon: FC<ICalendarEndOutlineIconProps> = memo(props => {
  return <CalendarEndOutlineSvg {...props} />;
});
