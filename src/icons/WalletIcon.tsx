import React, { FC, memo } from 'react';
import WalletSvg from '../svg/wallet.svg';

export interface IWalletIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WalletIcon: FC<IWalletIconProps> = memo(props => {
  return <WalletSvg {...props} />;
});
