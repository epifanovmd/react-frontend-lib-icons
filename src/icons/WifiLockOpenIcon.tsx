import React, { FC, memo } from 'react';
import WifiLockOpenSvg from '../svg/wifi-lock-open.svg';

export interface IWifiLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiLockOpenIcon: FC<IWifiLockOpenIconProps> = memo(props => {
  return <WifiLockOpenSvg {...props} />;
});
