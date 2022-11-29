import React, { FC, memo } from 'react';
import FilterVariantMinusSvg from '../svg/filter-variant-minus.svg';

export interface IFilterVariantMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterVariantMinusIcon: FC<IFilterVariantMinusIconProps> = memo(props => {
  return <FilterVariantMinusSvg {...props} />;
});
