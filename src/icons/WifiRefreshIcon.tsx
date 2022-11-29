import React, { FC, memo } from 'react';
import WifiRefreshSvg from '../svg/wifi-refresh.svg';

export interface IWifiRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiRefreshIcon: FC<IWifiRefreshIconProps> = memo(props => {
  return <WifiRefreshSvg {...props} />;
});
