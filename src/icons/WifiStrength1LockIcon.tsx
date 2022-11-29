import React, { FC, memo } from 'react';
import WifiStrength1LockSvg from '../svg/wifi-strength-1-lock.svg';

export interface IWifiStrength1LockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength1LockIcon: FC<IWifiStrength1LockIconProps> = memo(props => {
  return <WifiStrength1LockSvg {...props} />;
});
