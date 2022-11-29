import React, { FC, memo } from 'react';
import NetworkStrength4CogSvg from '../svg/network-strength-4-cog.svg';

export interface INetworkStrength4CogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength4CogIcon: FC<INetworkStrength4CogIconProps> = memo(props => {
  return <NetworkStrength4CogSvg {...props} />;
});
