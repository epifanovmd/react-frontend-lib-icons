import React, { FC, memo } from 'react';
import WifiCheckSvg from '../svg/wifi-check.svg';

export interface IWifiCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiCheckIcon: FC<IWifiCheckIconProps> = memo(props => {
  return <WifiCheckSvg {...props} />;
});
