import React, { FC, memo } from 'react';
import CartSvg from '../svg/cart.svg';

export interface ICartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartIcon: FC<ICartIconProps> = memo(props => {
  return <CartSvg {...props} />;
});
