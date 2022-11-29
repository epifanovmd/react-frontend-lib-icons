import React, { FC, memo } from 'react';
import CartPercentSvg from '../svg/cart-percent.svg';

export interface ICartPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartPercentIcon: FC<ICartPercentIconProps> = memo(props => {
  return <CartPercentSvg {...props} />;
});
