import React, { FC, memo } from 'react';
import BasketCheckOutlineSvg from '../svg/basket-check-outline.svg';

export interface IBasketCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketCheckOutlineIcon: FC<IBasketCheckOutlineIconProps> = memo(props => {
  return <BasketCheckOutlineSvg {...props} />;
});
