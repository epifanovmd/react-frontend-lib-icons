import React, { FC, memo } from 'react';
import FilterMultipleOutlineSvg from '../svg/filter-multiple-outline.svg';

export interface IFilterMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterMultipleOutlineIcon: FC<IFilterMultipleOutlineIconProps> = memo(props => {
  return <FilterMultipleOutlineSvg {...props} />;
});
