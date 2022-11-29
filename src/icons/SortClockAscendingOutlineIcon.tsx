import React, { FC, memo } from 'react';
import SortClockAscendingOutlineSvg from '../svg/sort-clock-ascending-outline.svg';

export interface ISortClockAscendingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortClockAscendingOutlineIcon: FC<ISortClockAscendingOutlineIconProps> = memo(props => {
  return <SortClockAscendingOutlineSvg {...props} />;
});
