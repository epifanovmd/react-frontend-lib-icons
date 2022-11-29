import React, { FC, memo } from 'react';
import BasketRemoveSvg from '../svg/basket-remove.svg';

export interface IBasketRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketRemoveIcon: FC<IBasketRemoveIconProps> = memo(props => {
  return <BasketRemoveSvg {...props} />;
});
