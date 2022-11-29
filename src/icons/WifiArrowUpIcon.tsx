import React, { FC, memo } from 'react';
import WifiArrowUpSvg from '../svg/wifi-arrow-up.svg';

export interface IWifiArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiArrowUpIcon: FC<IWifiArrowUpIconProps> = memo(props => {
  return <WifiArrowUpSvg {...props} />;
});
