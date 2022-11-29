import React, { FC, memo } from 'react';
import CartArrowUpSvg from '../svg/cart-arrow-up.svg';

export interface ICartArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartArrowUpIcon: FC<ICartArrowUpIconProps> = memo(props => {
  return <CartArrowUpSvg {...props} />;
});
