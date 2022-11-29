import React, { FC, memo } from 'react';
import CartMinusSvg from '../svg/cart-minus.svg';

export interface ICartMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartMinusIcon: FC<ICartMinusIconProps> = memo(props => {
  return <CartMinusSvg {...props} />;
});
