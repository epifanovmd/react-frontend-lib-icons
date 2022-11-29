import React, { FC, memo } from 'react';
import CalendarBlankOutlineSvg from '../svg/calendar-blank-outline.svg';

export interface ICalendarBlankOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarBlankOutlineIcon: FC<ICalendarBlankOutlineIconProps> = memo(props => {
  return <CalendarBlankOutlineSvg {...props} />;
});
