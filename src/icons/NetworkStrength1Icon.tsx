import React, { FC, memo } from 'react';
import NetworkStrength1Svg from '../svg/network-strength-1.svg';

export interface INetworkStrength1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength1Icon: FC<INetworkStrength1IconProps> = memo(props => {
  return <NetworkStrength1Svg {...props} />;
});
