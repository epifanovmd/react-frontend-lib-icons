import React, { FC, memo } from 'react';
import AccountNetworkOffSvg from '../svg/account-network-off.svg';

export interface IAccountNetworkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountNetworkOffIcon: FC<IAccountNetworkOffIconProps> = memo(props => {
  return <AccountNetworkOffSvg {...props} />;
});
