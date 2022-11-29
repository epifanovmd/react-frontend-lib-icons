import React, { FC, memo } from 'react';
import SortClockDescendingSvg from '../svg/sort-clock-descending.svg';

export interface ISortClockDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortClockDescendingIcon: FC<ISortClockDescendingIconProps> = memo(props => {
  return <SortClockDescendingSvg {...props} />;
});
