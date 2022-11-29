import React, { FC, memo } from 'react';
import FilterSettingsOutlineSvg from '../svg/filter-settings-outline.svg';

export interface IFilterSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterSettingsOutlineIcon: FC<IFilterSettingsOutlineIconProps> = memo(props => {
  return <FilterSettingsOutlineSvg {...props} />;
});
