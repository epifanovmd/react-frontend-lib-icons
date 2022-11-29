import React, { FC, memo } from 'react';
import NetworkSvg from '../svg/network.svg';

export interface INetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkIcon: FC<INetworkIconProps> = memo(props => {
  return <NetworkSvg {...props} />;
});
