import React, { FC, memo } from 'react';
import WalletPlusSvg from '../svg/wallet-plus.svg';

export interface IWalletPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WalletPlusIcon: FC<IWalletPlusIconProps> = memo(props => {
  return <WalletPlusSvg {...props} />;
});
