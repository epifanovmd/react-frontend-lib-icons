import React, { FC, memo } from 'react';
import WifiSvg from '../svg/wifi.svg';

export interface IWifiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiIcon: FC<IWifiIconProps> = memo(props => {
  return <WifiSvg {...props} />;
});
