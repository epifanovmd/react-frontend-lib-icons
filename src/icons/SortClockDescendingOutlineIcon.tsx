import React, { FC, memo } from 'react';
import SortClockDescendingOutlineSvg from '../svg/sort-clock-descending-outline.svg';

export interface ISortClockDescendingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortClockDescendingOutlineIcon: FC<ISortClockDescendingOutlineIconProps> = memo(props => {
  return <SortClockDescendingOutlineSvg {...props} />;
});
