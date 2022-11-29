import React, { FC, memo } from 'react';
import FilterMenuSvg from '../svg/filter-menu.svg';

export interface IFilterMenuIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterMenuIcon: FC<IFilterMenuIconProps> = memo(props => {
  return <FilterMenuSvg {...props} />;
});
