import React, { FC, memo } from 'react';
import WifiStarSvg from '../svg/wifi-star.svg';

export interface IWifiStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStarIcon: FC<IWifiStarIconProps> = memo(props => {
  return <WifiStarSvg {...props} />;
});
