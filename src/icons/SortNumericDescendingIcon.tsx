import React, { FC, memo } from 'react';
import SortNumericDescendingSvg from '../svg/sort-numeric-descending.svg';

export interface ISortNumericDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortNumericDescendingIcon: FC<ISortNumericDescendingIconProps> = memo(props => {
  return <SortNumericDescendingSvg {...props} />;
});
