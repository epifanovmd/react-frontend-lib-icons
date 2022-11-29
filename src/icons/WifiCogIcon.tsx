import React, { FC, memo } from 'react';
import WifiCogSvg from '../svg/wifi-cog.svg';

export interface IWifiCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiCogIcon: FC<IWifiCogIconProps> = memo(props => {
  return <WifiCogSvg {...props} />;
});
