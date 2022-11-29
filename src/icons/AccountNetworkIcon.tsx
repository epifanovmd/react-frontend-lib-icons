import React, { FC, memo } from 'react';
import AccountNetworkSvg from '../svg/account-network.svg';

export interface IAccountNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountNetworkIcon: FC<IAccountNetworkIconProps> = memo(props => {
  return <AccountNetworkSvg {...props} />;
});
