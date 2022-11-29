import React, { FC, memo } from 'react';
import FilterPlusOutlineSvg from '../svg/filter-plus-outline.svg';

export interface IFilterPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterPlusOutlineIcon: FC<IFilterPlusOutlineIconProps> = memo(props => {
  return <FilterPlusOutlineSvg {...props} />;
});
