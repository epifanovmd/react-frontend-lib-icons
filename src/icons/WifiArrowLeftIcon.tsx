import React, { FC, memo } from 'react';
import WifiArrowLeftSvg from '../svg/wifi-arrow-left.svg';

export interface IWifiArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiArrowLeftIcon: FC<IWifiArrowLeftIconProps> = memo(props => {
  return <WifiArrowLeftSvg {...props} />;
});
