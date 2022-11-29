import React, { FC, memo } from 'react';
import StarSettingsSvg from '../svg/star-settings.svg';

export interface IStarSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarSettingsIcon: FC<IStarSettingsIconProps> = memo(props => {
  return <StarSettingsSvg {...props} />;
});
