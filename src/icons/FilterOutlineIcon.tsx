import React, { FC, memo } from 'react';
import FilterOutlineSvg from '../svg/filter-outline.svg';

export interface IFilterOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterOutlineIcon: FC<IFilterOutlineIconProps> = memo(props => {
  return <FilterOutlineSvg {...props} />;
});
