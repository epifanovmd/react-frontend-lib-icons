import React, { FC, memo } from 'react';
import WalletPlusOutlineSvg from '../svg/wallet-plus-outline.svg';

export interface IWalletPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WalletPlusOutlineIcon: FC<IWalletPlusOutlineIconProps> = memo(props => {
  return <WalletPlusOutlineSvg {...props} />;
});
