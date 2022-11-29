import React, { FC, memo } from 'react';
import FilterCogSvg from '../svg/filter-cog.svg';

export interface IFilterCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterCogIcon: FC<IFilterCogIconProps> = memo(props => {
  return <FilterCogSvg {...props} />;
});
