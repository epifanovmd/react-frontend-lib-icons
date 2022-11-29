import React, { FC, memo } from 'react';
import WifiSyncSvg from '../svg/wifi-sync.svg';

export interface IWifiSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiSyncIcon: FC<IWifiSyncIconProps> = memo(props => {
  return <WifiSyncSvg {...props} />;
});
