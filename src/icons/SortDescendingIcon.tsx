import React, { FC, memo } from 'react';
import SortDescendingSvg from '../svg/sort-descending.svg';

export interface ISortDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortDescendingIcon: FC<ISortDescendingIconProps> = memo(props => {
  return <SortDescendingSvg {...props} />;
});
