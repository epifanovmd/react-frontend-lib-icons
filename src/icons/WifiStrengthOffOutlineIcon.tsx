import React, { FC, memo } from 'react';
import WifiStrengthOffOutlineSvg from '../svg/wifi-strength-off-outline.svg';

export interface IWifiStrengthOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrengthOffOutlineIcon: FC<IWifiStrengthOffOutlineIconProps> = memo(props => {
  return <WifiStrengthOffOutlineSvg {...props} />;
});
