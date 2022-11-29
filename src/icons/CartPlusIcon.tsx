import React, { FC, memo } from 'react';
import CartPlusSvg from '../svg/cart-plus.svg';

export interface ICartPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartPlusIcon: FC<ICartPlusIconProps> = memo(props => {
  return <CartPlusSvg {...props} />;
});
