import React, { FC, memo } from 'react';
import CalendarPlusOutlineSvg from '../svg/calendar-plus-outline.svg';

export interface ICalendarPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarPlusOutlineIcon: FC<ICalendarPlusOutlineIconProps> = memo(props => {
  return <CalendarPlusOutlineSvg {...props} />;
});
