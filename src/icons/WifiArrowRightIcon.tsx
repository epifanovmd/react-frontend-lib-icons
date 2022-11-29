import React, { FC, memo } from 'react';
import WifiArrowRightSvg from '../svg/wifi-arrow-right.svg';

export interface IWifiArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiArrowRightIcon: FC<IWifiArrowRightIconProps> = memo(props => {
  return <WifiArrowRightSvg {...props} />;
});
