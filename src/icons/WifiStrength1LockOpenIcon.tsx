import React, { FC, memo } from 'react';
import WifiStrength1LockOpenSvg from '../svg/wifi-strength-1-lock-open.svg';

export interface IWifiStrength1LockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength1LockOpenIcon: FC<IWifiStrength1LockOpenIconProps> = memo(props => {
  return <WifiStrength1LockOpenSvg {...props} />;
});
