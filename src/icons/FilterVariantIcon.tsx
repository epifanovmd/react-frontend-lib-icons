import React, { FC, memo } from 'react';
import FilterVariantSvg from '../svg/filter-variant.svg';

export interface IFilterVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterVariantIcon: FC<IFilterVariantIconProps> = memo(props => {
  return <FilterVariantSvg {...props} />;
});
