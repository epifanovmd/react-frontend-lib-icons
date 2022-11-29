import React, { FC, memo } from 'react';
import SortCalendarDescendingSvg from '../svg/sort-calendar-descending.svg';

export interface ISortCalendarDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortCalendarDescendingIcon: FC<ISortCalendarDescendingIconProps> = memo(props => {
  return <SortCalendarDescendingSvg {...props} />;
});
