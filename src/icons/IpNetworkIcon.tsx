import React, { FC, memo } from 'react';
import IpNetworkSvg from '../svg/ip-network.svg';

export interface IIpNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IpNetworkIcon: FC<IIpNetworkIconProps> = memo(props => {
  return <IpNetworkSvg {...props} />;
});
