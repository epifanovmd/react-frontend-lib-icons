import React, { FC, memo } from 'react';
import WifiArrowUpDownSvg from '../svg/wifi-arrow-up-down.svg';

export interface IWifiArrowUpDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiArrowUpDownIcon: FC<IWifiArrowUpDownIconProps> = memo(props => {
  return <WifiArrowUpDownSvg {...props} />;
});
