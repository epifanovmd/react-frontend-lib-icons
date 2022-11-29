import React, { FC, memo } from 'react';
import ShippingPalletSvg from '../svg/shipping-pallet.svg';

export interface IShippingPalletIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShippingPalletIcon: FC<IShippingPalletIconProps> = memo(props => {
  return <ShippingPalletSvg {...props} />;
});
