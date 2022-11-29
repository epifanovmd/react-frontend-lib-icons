import React, { FC, memo } from 'react';
import RouterWirelessSettingsSvg from '../svg/router-wireless-settings.svg';

export interface IRouterWirelessSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RouterWirelessSettingsIcon: FC<IRouterWirelessSettingsIconProps> = memo(props => {
  return <RouterWirelessSettingsSvg {...props} />;
});
