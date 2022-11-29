import React, { FC, memo } from 'react';
import WifiStrength3LockOpenSvg from '../svg/wifi-strength-3-lock-open.svg';

export interface IWifiStrength3LockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength3LockOpenIcon: FC<IWifiStrength3LockOpenIconProps> = memo(props => {
  return <WifiStrength3LockOpenSvg {...props} />;
});
