import React, { FC, memo } from 'react';
import BasketMinusOutlineSvg from '../svg/basket-minus-outline.svg';

export interface IBasketMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketMinusOutlineIcon: FC<IBasketMinusOutlineIconProps> = memo(props => {
  return <BasketMinusOutlineSvg {...props} />;
});
