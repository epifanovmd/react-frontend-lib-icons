import React, { FC, memo } from 'react';
import FilterSvg from '../svg/filter.svg';

export interface IFilterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterIcon: FC<IFilterIconProps> = memo(props => {
  return <FilterSvg {...props} />;
});
