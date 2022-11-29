import React, { FC, memo } from 'react';
import SortCalendarAscendingSvg from '../svg/sort-calendar-ascending.svg';

export interface ISortCalendarAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortCalendarAscendingIcon: FC<ISortCalendarAscendingIconProps> = memo(props => {
  return <SortCalendarAscendingSvg {...props} />;
});
