import React, { FC, memo } from 'react';
import CalendarMultiselectSvg from '../svg/calendar-multiselect.svg';

export interface ICalendarMultiselectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarMultiselectIcon: FC<ICalendarMultiselectIconProps> = memo(props => {
  return <CalendarMultiselectSvg {...props} />;
});
