import React, { FC, memo } from 'react';
import NetworkOutlineSvg from '../svg/network-outline.svg';

export interface INetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkOutlineIcon: FC<INetworkOutlineIconProps> = memo(props => {
  return <NetworkOutlineSvg {...props} />;
});
