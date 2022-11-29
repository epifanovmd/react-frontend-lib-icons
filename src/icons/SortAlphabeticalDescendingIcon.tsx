import React, { FC, memo } from 'react';
import SortAlphabeticalDescendingSvg from '../svg/sort-alphabetical-descending.svg';

export interface ISortAlphabeticalDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortAlphabeticalDescendingIcon: FC<ISortAlphabeticalDescendingIconProps> = memo(props => {
  return <SortAlphabeticalDescendingSvg {...props} />;
});
