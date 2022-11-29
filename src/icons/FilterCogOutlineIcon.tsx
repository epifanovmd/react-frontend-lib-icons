import React, { FC, memo } from 'react';
import FilterCogOutlineSvg from '../svg/filter-cog-outline.svg';

export interface IFilterCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterCogOutlineIcon: FC<IFilterCogOutlineIconProps> = memo(props => {
  return <FilterCogOutlineSvg {...props} />;
});
