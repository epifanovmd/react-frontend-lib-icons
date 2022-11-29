import React, { FC, memo } from 'react';
import FilterMultipleSvg from '../svg/filter-multiple.svg';

export interface IFilterMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterMultipleIcon: FC<IFilterMultipleIconProps> = memo(props => {
  return <FilterMultipleSvg {...props} />;
});
