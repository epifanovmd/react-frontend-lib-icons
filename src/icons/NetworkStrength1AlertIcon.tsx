import React, { FC, memo } from 'react';
import NetworkStrength1AlertSvg from '../svg/network-strength-1-alert.svg';

export interface INetworkStrength1AlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength1AlertIcon: FC<INetworkStrength1AlertIconProps> = memo(props => {
  return <NetworkStrength1AlertSvg {...props} />;
});
