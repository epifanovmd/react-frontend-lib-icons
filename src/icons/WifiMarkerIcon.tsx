import React, { FC, memo } from 'react';
import WifiMarkerSvg from '../svg/wifi-marker.svg';

export interface IWifiMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiMarkerIcon: FC<IWifiMarkerIconProps> = memo(props => {
  return <WifiMarkerSvg {...props} />;
});
