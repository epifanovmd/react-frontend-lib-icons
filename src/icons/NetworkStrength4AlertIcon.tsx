import React, { FC, memo } from 'react';
import NetworkStrength4AlertSvg from '../svg/network-strength-4-alert.svg';

export interface INetworkStrength4AlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength4AlertIcon: FC<INetworkStrength4AlertIconProps> = memo(props => {
  return <NetworkStrength4AlertSvg {...props} />;
});
