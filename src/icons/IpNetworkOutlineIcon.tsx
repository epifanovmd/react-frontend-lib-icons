import React, { FC, memo } from 'react';
import IpNetworkOutlineSvg from '../svg/ip-network-outline.svg';

export interface IIpNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IpNetworkOutlineIcon: FC<IIpNetworkOutlineIconProps> = memo(props => {
  return <IpNetworkOutlineSvg {...props} />;
});
