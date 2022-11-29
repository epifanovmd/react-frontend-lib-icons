import React, { FC, memo } from 'react';
import NetworkPosSvg from '../svg/network-pos.svg';

export interface INetworkPosIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkPosIcon: FC<INetworkPosIconProps> = memo(props => {
  return <NetworkPosSvg {...props} />;
});
