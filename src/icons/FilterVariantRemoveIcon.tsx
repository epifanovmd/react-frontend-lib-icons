import React, { FC, memo } from 'react';
import FilterVariantRemoveSvg from '../svg/filter-variant-remove.svg';

export interface IFilterVariantRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterVariantRemoveIcon: FC<IFilterVariantRemoveIconProps> = memo(props => {
  return <FilterVariantRemoveSvg {...props} />;
});
