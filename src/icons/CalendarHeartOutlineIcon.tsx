import React, { FC, memo } from 'react';
import CalendarHeartOutlineSvg from '../svg/calendar-heart-outline.svg';

export interface ICalendarHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarHeartOutlineIcon: FC<ICalendarHeartOutlineIconProps> = memo(props => {
  return <CalendarHeartOutlineSvg {...props} />;
});
