import React, { FC, memo } from 'react';
import SecurityNetworkSvg from '../svg/security-network.svg';

export interface ISecurityNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SecurityNetworkIcon: FC<ISecurityNetworkIconProps> = memo(props => {
  return <SecurityNetworkSvg {...props} />;
});
