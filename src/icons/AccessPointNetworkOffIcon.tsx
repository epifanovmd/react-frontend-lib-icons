import React, { FC, memo } from 'react';
import AccessPointNetworkOffSvg from '../svg/access-point-network-off.svg';

export interface IAccessPointNetworkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccessPointNetworkOffIcon: FC<IAccessPointNetworkOffIconProps> = memo(props => {
  return <AccessPointNetworkOffSvg {...props} />;
});
