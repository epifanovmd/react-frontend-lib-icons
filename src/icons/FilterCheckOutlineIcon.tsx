import React, { FC, memo } from 'react';
import FilterCheckOutlineSvg from '../svg/filter-check-outline.svg';

export interface IFilterCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterCheckOutlineIcon: FC<IFilterCheckOutlineIconProps> = memo(props => {
  return <FilterCheckOutlineSvg {...props} />;
});
