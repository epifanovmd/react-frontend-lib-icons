import React, { FC, memo } from 'react';
import FilterMenuOutlineSvg from '../svg/filter-menu-outline.svg';

export interface IFilterMenuOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterMenuOutlineIcon: FC<IFilterMenuOutlineIconProps> = memo(props => {
  return <FilterMenuOutlineSvg {...props} />;
});
