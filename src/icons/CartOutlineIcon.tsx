import React, { FC, memo } from 'react';
import CartOutlineSvg from '../svg/cart-outline.svg';

export interface ICartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CartOutlineIcon: FC<ICartOutlineIconProps> = memo(props => {
  return <CartOutlineSvg {...props} />;
});
