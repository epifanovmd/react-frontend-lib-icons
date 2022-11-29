import React, { FC, memo } from 'react';
import NetworkOffSvg from '../svg/network-off.svg';

export interface INetworkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkOffIcon: FC<INetworkOffIconProps> = memo(props => {
  return <NetworkOffSvg {...props} />;
});
