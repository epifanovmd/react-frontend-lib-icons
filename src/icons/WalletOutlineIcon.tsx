import React, { FC, memo } from 'react';
import WalletOutlineSvg from '../svg/wallet-outline.svg';

export interface IWalletOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WalletOutlineIcon: FC<IWalletOutlineIconProps> = memo(props => {
  return <WalletOutlineSvg {...props} />;
});
