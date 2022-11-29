import React, { FC, memo } from 'react';
import CalendarOutlineSvg from '../svg/calendar-outline.svg';

export interface ICalendarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarOutlineIcon: FC<ICalendarOutlineIconProps> = memo(props => {
  return <CalendarOutlineSvg {...props} />;
});
