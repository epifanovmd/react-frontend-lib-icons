import React, { FC, memo } from 'react';
import CalendarStartOutlineSvg from '../svg/calendar-start-outline.svg';

export interface ICalendarStartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarStartOutlineIcon: FC<ICalendarStartOutlineIconProps> = memo(props => {
  return <CalendarStartOutlineSvg {...props} />;
});
