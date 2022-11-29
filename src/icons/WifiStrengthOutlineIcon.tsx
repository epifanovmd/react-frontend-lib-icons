import React, { FC, memo } from 'react';
import WifiStrengthOutlineSvg from '../svg/wifi-strength-outline.svg';

export interface IWifiStrengthOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiStrengthOutlineIcon: FC<IWifiStrengthOutlineIconProps> = memo(props => {
  return <WifiStrengthOutlineSvg {...props} />;
});
