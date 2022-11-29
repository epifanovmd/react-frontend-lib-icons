import React, { FC, memo } from 'react';
import CartOffSvg from '../svg/cart-off.svg';

export interface ICartOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartOffIcon: FC<ICartOffIconProps> = memo(props => {
  return <CartOffSvg {...props} />;
});
