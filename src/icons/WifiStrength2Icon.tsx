import React, { FC, memo } from 'react';
import WifiStrength2Svg from '../svg/wifi-strength-2.svg';

export interface IWifiStrength2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrength2Icon: FC<IWifiStrength2IconProps> = memo(props => {
  return <WifiStrength2Svg {...props} />;
});
