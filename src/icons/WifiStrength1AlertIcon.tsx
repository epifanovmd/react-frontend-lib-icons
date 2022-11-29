import React, { FC, memo } from 'react';
import WifiStrength1AlertSvg from '../svg/wifi-strength-1-alert.svg';

export interface IWifiStrength1AlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength1AlertIcon: FC<IWifiStrength1AlertIconProps> = memo(props => {
  return <WifiStrength1AlertSvg {...props} />;
});
