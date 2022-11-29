import React, { FC, memo } from 'react';
import CartCheckSvg from '../svg/cart-check.svg';

export interface ICartCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartCheckIcon: FC<ICartCheckIconProps> = memo(props => {
  return <CartCheckSvg {...props} />;
});
