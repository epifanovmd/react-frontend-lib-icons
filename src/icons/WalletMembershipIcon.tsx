import React, { FC, memo } from 'react';
import WalletMembershipSvg from '../svg/wallet-membership.svg';

export interface IWalletMembershipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WalletMembershipIcon: FC<IWalletMembershipIconProps> = memo(props => {
  return <WalletMembershipSvg {...props} />;
});
