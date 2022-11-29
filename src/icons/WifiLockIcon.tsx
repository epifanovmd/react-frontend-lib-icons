import React, { FC, memo } from 'react';
import WifiLockSvg from '../svg/wifi-lock.svg';

export interface IWifiLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiLockIcon: FC<IWifiLockIconProps> = memo(props => {
  return <WifiLockSvg {...props} />;
});
