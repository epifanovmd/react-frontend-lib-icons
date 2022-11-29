import React, { FC, memo } from 'react';
import FilterOffOutlineSvg from '../svg/filter-off-outline.svg';

export interface IFilterOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterOffOutlineIcon: FC<IFilterOffOutlineIconProps> = memo(props => {
  return <FilterOffOutlineSvg {...props} />;
});
