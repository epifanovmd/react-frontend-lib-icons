import React, { FC, memo } from 'react';
import WifiStrength3AlertSvg from '../svg/wifi-strength-3-alert.svg';

export interface IWifiStrength3AlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength3AlertIcon: FC<IWifiStrength3AlertIconProps> = memo(props => {
  return <WifiStrength3AlertSvg {...props} />;
});
