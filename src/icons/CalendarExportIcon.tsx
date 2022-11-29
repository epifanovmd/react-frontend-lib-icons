import React, { FC, memo } from 'react';
import CalendarExportSvg from '../svg/calendar-export.svg';

export interface ICalendarExportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarExportIcon: FC<ICalendarExportIconProps> = memo(props => {
  return <CalendarExportSvg {...props} />;
});
