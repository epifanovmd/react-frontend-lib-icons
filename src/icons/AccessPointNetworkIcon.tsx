import React, { FC, memo } from 'react';
import AccessPointNetworkSvg from '../svg/access-point-network.svg';

export interface IAccessPointNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccessPointNetworkIcon: FC<IAccessPointNetworkIconProps> = memo(props => {
  return <AccessPointNetworkSvg {...props} />;
});
