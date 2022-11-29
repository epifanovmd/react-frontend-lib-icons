import React, { FC, memo } from 'react';
import CalendarRemoveSvg from '../svg/calendar-remove.svg';

export interface ICalendarRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarRemoveIcon: FC<ICalendarRemoveIconProps> = memo(props => {
  return <CalendarRemoveSvg {...props} />;
});
