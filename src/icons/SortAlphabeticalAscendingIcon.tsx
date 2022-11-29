import React, { FC, memo } from 'react';
import SortAlphabeticalAscendingSvg from '../svg/sort-alphabetical-ascending.svg';

export interface ISortAlphabeticalAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortAlphabeticalAscendingIcon: FC<ISortAlphabeticalAscendingIconProps> = memo(props => {
  return <SortAlphabeticalAscendingSvg {...props} />;
});
