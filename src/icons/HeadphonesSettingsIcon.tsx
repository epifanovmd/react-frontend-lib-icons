import React, { FC, memo } from 'react';
import HeadphonesSettingsSvg from '../svg/headphones-settings.svg';

export interface IHeadphonesSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadphonesSettingsIcon: FC<IHeadphonesSettingsIconProps> = memo(props => {
  return <HeadphonesSettingsSvg {...props} />;
});
