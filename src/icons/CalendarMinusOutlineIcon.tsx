import React, { FC, memo } from 'react';
import CalendarMinusOutlineSvg from '../svg/calendar-minus-outline.svg';

export interface ICalendarMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarMinusOutlineIcon: FC<ICalendarMinusOutlineIconProps> = memo(props => {
  return <CalendarMinusOutlineSvg {...props} />;
});
