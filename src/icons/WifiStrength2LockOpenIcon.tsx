import React, { FC, memo } from 'react';
import WifiStrength2LockOpenSvg from '../svg/wifi-strength-2-lock-open.svg';

export interface IWifiStrength2LockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength2LockOpenIcon: FC<IWifiStrength2LockOpenIconProps> = memo(props => {
  return <WifiStrength2LockOpenSvg {...props} />;
});
