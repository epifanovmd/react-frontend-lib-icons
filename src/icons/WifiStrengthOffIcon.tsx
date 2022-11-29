import React, { FC, memo } from 'react';
import WifiStrengthOffSvg from '../svg/wifi-strength-off.svg';

export interface IWifiStrengthOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrengthOffIcon: FC<IWifiStrengthOffIconProps> = memo(props => {
  return <WifiStrengthOffSvg {...props} />;
});
