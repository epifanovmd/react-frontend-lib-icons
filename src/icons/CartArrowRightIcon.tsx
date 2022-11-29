import React, { FC, memo } from 'react';
import CartArrowRightSvg from '../svg/cart-arrow-right.svg';

export interface ICartArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartArrowRightIcon: FC<ICartArrowRightIconProps> = memo(props => {
  return <CartArrowRightSvg {...props} />;
});
