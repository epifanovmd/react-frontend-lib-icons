import React, { FC, memo } from 'react';
import FilterCheckSvg from '../svg/filter-check.svg';

export interface IFilterCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterCheckIcon: FC<IFilterCheckIconProps> = memo(props => {
  return <FilterCheckSvg {...props} />;
});
