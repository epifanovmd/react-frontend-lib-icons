import React, { FC, memo } from 'react';
import ServerNetworkOffSvg from '../svg/server-network-off.svg';

export interface IServerNetworkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ServerNetworkOffIcon: FC<IServerNetworkOffIconProps> = memo(props => {
  return <ServerNetworkOffSvg {...props} />;
});
