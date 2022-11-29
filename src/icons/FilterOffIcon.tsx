import React, { FC, memo } from 'react';
import FilterOffSvg from '../svg/filter-off.svg';

export interface IFilterOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterOffIcon: FC<IFilterOffIconProps> = memo(props => {
  return <FilterOffSvg {...props} />;
});
