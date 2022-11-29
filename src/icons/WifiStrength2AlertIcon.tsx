import React, { FC, memo } from 'react';
import WifiStrength2AlertSvg from '../svg/wifi-strength-2-alert.svg';

export interface IWifiStrength2AlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength2AlertIcon: FC<IWifiStrength2AlertIconProps> = memo(props => {
  return <WifiStrength2AlertSvg {...props} />;
});
