import React, { FC, memo } from 'react';
import CartRemoveSvg from '../svg/cart-remove.svg';

export interface ICartRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartRemoveIcon: FC<ICartRemoveIconProps> = memo(props => {
  return <CartRemoveSvg {...props} />;
});
