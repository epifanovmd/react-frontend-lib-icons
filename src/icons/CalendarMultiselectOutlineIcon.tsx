import React, { FC, memo } from 'react';
import CalendarMultiselectOutlineSvg from '../svg/calendar-multiselect-outline.svg';

export interface ICalendarMultiselectOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarMultiselectOutlineIcon: FC<ICalendarMultiselectOutlineIconProps> = memo(props => {
  return <CalendarMultiselectOutlineSvg {...props} />;
});
