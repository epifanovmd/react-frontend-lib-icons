import React, { FC, memo } from 'react';
import WifiStrengthLockOutlineSvg from '../svg/wifi-strength-lock-outline.svg';

export interface IWifiStrengthLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrengthLockOutlineIcon: FC<IWifiStrengthLockOutlineIconProps> = memo(props => {
  return <WifiStrengthLockOutlineSvg {...props} />;
});
