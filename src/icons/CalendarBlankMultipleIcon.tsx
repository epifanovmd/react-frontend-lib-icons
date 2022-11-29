import React, { FC, memo } from 'react';
import CalendarBlankMultipleSvg from '../svg/calendar-blank-multiple.svg';

export interface ICalendarBlankMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarBlankMultipleIcon: FC<ICalendarBlankMultipleIconProps> = memo(props => {
  return <CalendarBlankMultipleSvg {...props} />;
});
