import React, { FC, memo } from 'react';
import WifiStrength4LockOpenSvg from '../svg/wifi-strength-4-lock-open.svg';

export interface IWifiStrength4LockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength4LockOpenIcon: FC<IWifiStrength4LockOpenIconProps> = memo(props => {
  return <WifiStrength4LockOpenSvg {...props} />;
});
