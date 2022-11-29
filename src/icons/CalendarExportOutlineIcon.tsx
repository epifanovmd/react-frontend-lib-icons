import React, { FC, memo } from 'react';
import CalendarExportOutlineSvg from '../svg/calendar-export-outline.svg';

export interface ICalendarExportOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarExportOutlineIcon: FC<ICalendarExportOutlineIconProps> = memo(props => {
  return <CalendarExportOutlineSvg {...props} />;
});
