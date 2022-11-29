import React, { FC, memo } from 'react';
import CalendarImportOutlineSvg from '../svg/calendar-import-outline.svg';

export interface ICalendarImportOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalendarImportOutlineIcon: FC<ICalendarImportOutlineIconProps> = memo(props => {
  return <CalendarImportOutlineSvg {...props} />;
});
