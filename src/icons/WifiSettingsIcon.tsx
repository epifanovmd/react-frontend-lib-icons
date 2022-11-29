import React, { FC, memo } from 'react';
import WifiSettingsSvg from '../svg/wifi-settings.svg';

export interface IWifiSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiSettingsIcon: FC<IWifiSettingsIconProps> = memo(props => {
  return <WifiSettingsSvg {...props} />;
});
