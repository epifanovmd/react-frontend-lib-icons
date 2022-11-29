import React, { FC, memo } from 'react';
import BasketFillSvg from '../svg/basket-fill.svg';

export interface IBasketFillIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketFillIcon: FC<IBasketFillIconProps> = memo(props => {
  return <BasketFillSvg {...props} />;
});
