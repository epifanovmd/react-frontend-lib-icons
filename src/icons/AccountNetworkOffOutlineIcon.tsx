import React, { FC, memo } from 'react';
import AccountNetworkOffOutlineSvg from '../svg/account-network-off-outline.svg';

export interface IAccountNetworkOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountNetworkOffOutlineIcon: FC<IAccountNetworkOffOutlineIconProps> = memo(props => {
  return <AccountNetworkOffOutlineSvg {...props} />;
});
