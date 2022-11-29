import React, { FC, memo } from 'react';
import WifiArrowDownSvg from '../svg/wifi-arrow-down.svg';

export interface IWifiArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiArrowDownIcon: FC<IWifiArrowDownIconProps> = memo(props => {
  return <WifiArrowDownSvg {...props} />;
});
