import React, { FC, memo } from 'react';
import WifiStrengthLockOpenOutlineSvg from '../svg/wifi-strength-lock-open-outline.svg';

export interface IWifiStrengthLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrengthLockOpenOutlineIcon: FC<IWifiStrengthLockOpenOutlineIconProps> = memo(props => {
  return <WifiStrengthLockOpenOutlineSvg {...props} />;
});
