import React, { FC, memo } from 'react';
import AccountNetworkOutlineSvg from '../svg/account-network-outline.svg';

export interface IAccountNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountNetworkOutlineIcon: FC<IAccountNetworkOutlineIconProps> = memo(props => {
  return <AccountNetworkOutlineSvg {...props} />;
});
