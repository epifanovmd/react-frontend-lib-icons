import React, { FC, memo } from 'react';
import BasketRemoveOutlineSvg from '../svg/basket-remove-outline.svg';

export interface IBasketRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketRemoveOutlineIcon: FC<IBasketRemoveOutlineIconProps> = memo(props => {
  return <BasketRemoveOutlineSvg {...props} />;
});
