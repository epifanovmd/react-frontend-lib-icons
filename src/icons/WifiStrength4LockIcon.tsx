import React, { FC, memo } from 'react';
import WifiStrength4LockSvg from '../svg/wifi-strength-4-lock.svg';

export interface IWifiStrength4LockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength4LockIcon: FC<IWifiStrength4LockIconProps> = memo(props => {
  return <WifiStrength4LockSvg {...props} />;
});
