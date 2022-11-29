import React, { FC, memo } from 'react';
import FilterVariantPlusSvg from '../svg/filter-variant-plus.svg';

export interface IFilterVariantPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterVariantPlusIcon: FC<IFilterVariantPlusIconProps> = memo(props => {
  return <FilterVariantPlusSvg {...props} />;
});
