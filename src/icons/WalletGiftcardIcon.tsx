import React, { FC, memo } from 'react';
import WalletGiftcardSvg from '../svg/wallet-giftcard.svg';

export interface IWalletGiftcardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WalletGiftcardIcon: FC<IWalletGiftcardIconProps> = memo(props => {
  return <WalletGiftcardSvg {...props} />;
});
