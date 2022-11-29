import React, { FC, memo } from 'react';
import SortBoolDescendingSvg from '../svg/sort-bool-descending.svg';

export interface ISortBoolDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortBoolDescendingIcon: FC<ISortBoolDescendingIconProps> = memo(props => {
  return <SortBoolDescendingSvg {...props} />;
});
