import React, { FC, memo } from 'react';
import CartVariantSvg from '../svg/cart-variant.svg';

export interface ICartVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartVariantIcon: FC<ICartVariantIconProps> = memo(props => {
  return <CartVariantSvg {...props} />;
});
