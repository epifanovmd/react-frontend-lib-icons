import React, { FC, memo } from 'react';
import WifiPlusSvg from '../svg/wifi-plus.svg';

export interface IWifiPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiPlusIcon: FC<IWifiPlusIconProps> = memo(props => {
  return <WifiPlusSvg {...props} />;
});
