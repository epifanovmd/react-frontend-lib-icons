import React, { FC, memo } from 'react';
import CalendarRangeOutlineSvg from '../svg/calendar-range-outline.svg';

export interface ICalendarRangeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarRangeOutlineIcon: FC<ICalendarRangeOutlineIconProps> = memo(props => {
  return <CalendarRangeOutlineSvg {...props} />;
});
