import React, { FC, memo } from 'react';
import CalendarImportSvg from '../svg/calendar-import.svg';

export interface ICalendarImportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarImportIcon: FC<ICalendarImportIconProps> = memo(props => {
  return <CalendarImportSvg {...props} />;
});
