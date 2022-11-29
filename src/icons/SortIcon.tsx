import React, { FC, memo } from 'react';
import SortSvg from '../svg/sort.svg';

export interface ISortIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortIcon: FC<ISortIconProps> = memo(props => {
  return <SortSvg {...props} />;
});
