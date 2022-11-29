import React, { FC, memo } from 'react';
import WifiStrength4Svg from '../svg/wifi-strength-4.svg';

export interface IWifiStrength4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength4Icon: FC<IWifiStrength4IconProps> = memo(props => {
  return <WifiStrength4Svg {...props} />;
});
