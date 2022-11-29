import React, { FC, memo } from 'react';
import CalendarRemoveOutlineSvg from '../svg/calendar-remove-outline.svg';

export interface ICalendarRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarRemoveOutlineIcon: FC<ICalendarRemoveOutlineIconProps> = memo(props => {
  return <CalendarRemoveOutlineSvg {...props} />;
});
