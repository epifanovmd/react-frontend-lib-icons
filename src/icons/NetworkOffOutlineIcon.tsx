import React, { FC, memo } from 'react';
import NetworkOffOutlineSvg from '../svg/network-off-outline.svg';

export interface INetworkOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkOffOutlineIcon: FC<INetworkOffOutlineIconProps> = memo(props => {
  return <NetworkOffOutlineSvg {...props} />;
});
