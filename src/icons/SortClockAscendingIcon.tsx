import React, { FC, memo } from 'react';
import SortClockAscendingSvg from '../svg/sort-clock-ascending.svg';

export interface ISortClockAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortClockAscendingIcon: FC<ISortClockAscendingIconProps> = memo(props => {
  return <SortClockAscendingSvg {...props} />;
});
