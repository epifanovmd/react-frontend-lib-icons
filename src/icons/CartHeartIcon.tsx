import React, { FC, memo } from 'react';
import CartHeartSvg from '../svg/cart-heart.svg';

export interface ICartHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartHeartIcon: FC<ICartHeartIconProps> = memo(props => {
  return <CartHeartSvg {...props} />;
});
