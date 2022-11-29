import React, { FC, memo } from 'react';
import WifiMinusSvg from '../svg/wifi-minus.svg';

export interface IWifiMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiMinusIcon: FC<IWifiMinusIconProps> = memo(props => {
  return <WifiMinusSvg {...props} />;
});
