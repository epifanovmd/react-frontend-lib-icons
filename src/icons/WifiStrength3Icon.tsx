import React, { FC, memo } from 'react';
import WifiStrength3Svg from '../svg/wifi-strength-3.svg';

export interface IWifiStrength3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength3Icon: FC<IWifiStrength3IconProps> = memo(props => {
  return <WifiStrength3Svg {...props} />;
});
