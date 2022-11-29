import React, { FC, memo } from 'react';
import WifiStrength4AlertSvg from '../svg/wifi-strength-4-alert.svg';

export interface IWifiStrength4AlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength4AlertIcon: FC<IWifiStrength4AlertIconProps> = memo(props => {
  return <WifiStrength4AlertSvg {...props} />;
});
