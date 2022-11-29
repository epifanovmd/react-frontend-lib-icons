import React, { FC, memo } from 'react';
import NetworkStrength2AlertSvg from '../svg/network-strength-2-alert.svg';

export interface INetworkStrength2AlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength2AlertIcon: FC<INetworkStrength2AlertIconProps> = memo(props => {
  return <NetworkStrength2AlertSvg {...props} />;
});
