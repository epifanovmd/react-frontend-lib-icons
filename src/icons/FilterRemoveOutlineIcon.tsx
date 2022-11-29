import React, { FC, memo } from 'react';
import FilterRemoveOutlineSvg from '../svg/filter-remove-outline.svg';

export interface IFilterRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterRemoveOutlineIcon: FC<IFilterRemoveOutlineIconProps> = memo(props => {
  return <FilterRemoveOutlineSvg {...props} />;
});
