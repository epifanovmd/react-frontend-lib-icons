import React, { FC, memo } from 'react';
import FilterMinusSvg from '../svg/filter-minus.svg';

export interface IFilterMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterMinusIcon: FC<IFilterMinusIconProps> = memo(props => {
  return <FilterMinusSvg {...props} />;
});
