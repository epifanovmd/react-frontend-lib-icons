import React, { FC, memo } from 'react';
import NetworkStrength3AlertSvg from '../svg/network-strength-3-alert.svg';

export interface INetworkStrength3AlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength3AlertIcon: FC<INetworkStrength3AlertIconProps> = memo(props => {
  return <NetworkStrength3AlertSvg {...props} />;
});
