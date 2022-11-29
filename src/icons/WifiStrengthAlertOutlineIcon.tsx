import React, { FC, memo } from 'react';
import WifiStrengthAlertOutlineSvg from '../svg/wifi-strength-alert-outline.svg';

export interface IWifiStrengthAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrengthAlertOutlineIcon: FC<IWifiStrengthAlertOutlineIconProps> = memo(props => {
  return <WifiStrengthAlertOutlineSvg {...props} />;
});
