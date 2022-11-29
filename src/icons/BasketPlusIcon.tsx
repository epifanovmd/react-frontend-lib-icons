import React, { FC, memo } from 'react';
import BasketPlusSvg from '../svg/basket-plus.svg';

export interface IBasketPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketPlusIcon: FC<IBasketPlusIconProps> = memo(props => {
  return <BasketPlusSvg {...props} />;
});
