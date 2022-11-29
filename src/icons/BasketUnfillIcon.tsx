import React, { FC, memo } from 'react';
import BasketUnfillSvg from '../svg/basket-unfill.svg';

export interface IBasketUnfillIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketUnfillIcon: FC<IBasketUnfillIconProps> = memo(props => {
  return <BasketUnfillSvg {...props} />;
});
