import React, { FC, memo } from 'react';
import WalletTravelSvg from '../svg/wallet-travel.svg';

export interface IWalletTravelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WalletTravelIcon: FC<IWalletTravelIconProps> = memo(props => {
  return <WalletTravelSvg {...props} />;
});
