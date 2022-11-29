import React, { FC, memo } from 'react';
import SortBoolAscendingSvg from '../svg/sort-bool-ascending.svg';

export interface ISortBoolAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortBoolAscendingIcon: FC<ISortBoolAscendingIconProps> = memo(props => {
  return <SortBoolAscendingSvg {...props} />;
});
