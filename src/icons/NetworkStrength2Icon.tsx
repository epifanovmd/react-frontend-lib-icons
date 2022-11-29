import React, { FC, memo } from 'react';
import NetworkStrength2Svg from '../svg/network-strength-2.svg';

export interface INetworkStrength2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrength2Icon: FC<INetworkStrength2IconProps> = memo(props => {
  return <NetworkStrength2Svg {...props} />;
});
