import React, { FC, memo } from 'react';
import BasketMinusSvg from '../svg/basket-minus.svg';

export interface IBasketMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketMinusIcon: FC<IBasketMinusIconProps> = memo(props => {
  return <BasketMinusSvg {...props} />;
});
