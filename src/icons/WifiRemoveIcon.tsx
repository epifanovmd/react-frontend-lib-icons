import React, { FC, memo } from 'react';
import WifiRemoveSvg from '../svg/wifi-remove.svg';

export interface IWifiRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiRemoveIcon: FC<IWifiRemoveIconProps> = memo(props => {
  return <WifiRemoveSvg {...props} />;
});
