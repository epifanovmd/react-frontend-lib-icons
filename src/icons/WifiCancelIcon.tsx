import React, { FC, memo } from 'react';
import WifiCancelSvg from '../svg/wifi-cancel.svg';

export interface IWifiCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiCancelIcon: FC<IWifiCancelIconProps> = memo(props => {
  return <WifiCancelSvg {...props} />;
});
