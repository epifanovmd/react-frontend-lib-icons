import React, { FC, memo } from 'react';
import WifiStrength1Svg from '../svg/wifi-strength-1.svg';

export interface IWifiStrength1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength1Icon: FC<IWifiStrength1IconProps> = memo(props => {
  return <WifiStrength1Svg {...props} />;
});
