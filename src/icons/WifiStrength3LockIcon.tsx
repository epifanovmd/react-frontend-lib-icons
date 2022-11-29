import React, { FC, memo } from 'react';
import WifiStrength3LockSvg from '../svg/wifi-strength-3-lock.svg';

export interface IWifiStrength3LockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength3LockIcon: FC<IWifiStrength3LockIconProps> = memo(props => {
  return <WifiStrength3LockSvg {...props} />;
});
