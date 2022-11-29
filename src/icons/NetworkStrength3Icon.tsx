import React, { FC, memo } from 'react';
import NetworkStrength3Svg from '../svg/network-strength-3.svg';

export interface INetworkStrength3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength3Icon: FC<INetworkStrength3IconProps> = memo(props => {
  return <NetworkStrength3Svg {...props} />;
});
