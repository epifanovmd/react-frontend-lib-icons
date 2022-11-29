import React, { FC, memo } from 'react';
import RouterNetworkSvg from '../svg/router-network.svg';

export interface IRouterNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RouterNetworkIcon: FC<IRouterNetworkIconProps> = memo(props => {
  return <RouterNetworkSvg {...props} />;
});
