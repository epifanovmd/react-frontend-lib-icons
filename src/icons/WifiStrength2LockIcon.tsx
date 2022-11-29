import React, { FC, memo } from 'react';
import WifiStrength2LockSvg from '../svg/wifi-strength-2-lock.svg';

export interface IWifiStrength2LockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength2LockIcon: FC<IWifiStrength2LockIconProps> = memo(props => {
  return <WifiStrength2LockSvg {...props} />;
});
