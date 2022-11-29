import React, { FC, memo } from 'react';
import FilterMinusOutlineSvg from '../svg/filter-minus-outline.svg';

export interface IFilterMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterMinusOutlineIcon: FC<IFilterMinusOutlineIconProps> = memo(props => {
  return <FilterMinusOutlineSvg {...props} />;
});
