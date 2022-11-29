import React, { FC, memo } from 'react';
import NetworkStrength4Svg from '../svg/network-strength-4.svg';

export interface INetworkStrength4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength4Icon: FC<INetworkStrength4IconProps> = memo(props => {
  return <NetworkStrength4Svg {...props} />;
});
