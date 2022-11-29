import React, { FC, memo } from 'react';
import ServerNetworkSvg from '../svg/server-network.svg';

export interface IServerNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ServerNetworkIcon: FC<IServerNetworkIconProps> = memo(props => {
  return <ServerNetworkSvg {...props} />;
});
