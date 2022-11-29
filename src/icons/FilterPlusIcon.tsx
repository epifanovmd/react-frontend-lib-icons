import React, { FC, memo } from 'react';
import FilterPlusSvg from '../svg/filter-plus.svg';

export interface IFilterPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterPlusIcon: FC<IFilterPlusIconProps> = memo(props => {
  return <FilterPlusSvg {...props} />;
});
