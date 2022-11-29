import React, { FC, memo } from 'react';
import WifiAlertSvg from '../svg/wifi-alert.svg';

export interface IWifiAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiAlertIcon: FC<IWifiAlertIconProps> = memo(props => {
  return <WifiAlertSvg {...props} />;
});
