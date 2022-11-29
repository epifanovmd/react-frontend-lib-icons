import React, { FC, memo } from 'react';
import VpnSvg from '../svg/vpn.svg';

export interface IVpnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VpnIcon: FC<IVpnIconProps> = memo(props => {
  return <VpnSvg {...props} />;
});
