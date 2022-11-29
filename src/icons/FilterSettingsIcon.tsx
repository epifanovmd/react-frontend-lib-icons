import React, { FC, memo } from 'react';
import FilterSettingsSvg from '../svg/filter-settings.svg';

export interface IFilterSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilterSettingsIcon: FC<IFilterSettingsIconProps> = memo(props => {
  return <FilterSettingsSvg {...props} />;
});
