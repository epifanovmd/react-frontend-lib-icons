import React, { FC, memo } from 'react';
import HeartSettingsSvg from '../svg/heart-settings.svg';

export interface IHeartSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartSettingsIcon: FC<IHeartSettingsIconProps> = memo(props => {
  return <HeartSettingsSvg {...props} />;
});
