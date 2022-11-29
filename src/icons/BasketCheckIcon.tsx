import React, { FC, memo } from 'react';
import BasketCheckSvg from '../svg/basket-check.svg';

export interface IBasketCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketCheckIcon: FC<IBasketCheckIconProps> = memo(props => {
  return <BasketCheckSvg {...props} />;
});
