import React, { FC, memo } from 'react';
import CartArrowDownSvg from '../svg/cart-arrow-down.svg';

export interface ICartArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartArrowDownIcon: FC<ICartArrowDownIconProps> = memo(props => {
  return <CartArrowDownSvg {...props} />;
});
