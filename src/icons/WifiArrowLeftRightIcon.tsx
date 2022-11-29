import React, { FC, memo } from 'react';
import WifiArrowLeftRightSvg from '../svg/wifi-arrow-left-right.svg';

export interface IWifiArrowLeftRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiArrowLeftRightIcon: FC<IWifiArrowLeftRightIconProps> = memo(props => {
  return <WifiArrowLeftRightSvg {...props} />;
});
