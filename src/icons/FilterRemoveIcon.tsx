import React, { FC, memo } from 'react';
import FilterRemoveSvg from '../svg/filter-remove.svg';

export interface IFilterRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterRemoveIcon: FC<IFilterRemoveIconProps> = memo(props => {
  return <FilterRemoveSvg {...props} />;
});
