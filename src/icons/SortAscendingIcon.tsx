import React, { FC, memo } from 'react';
import SortAscendingSvg from '../svg/sort-ascending.svg';

export interface ISortAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortAscendingIcon: FC<ISortAscendingIconProps> = memo(props => {
  return <SortAscendingSvg {...props} />;
});
