import React, { FC, memo } from 'react';
import BasketOutlineSvg from '../svg/basket-outline.svg';

export interface IBasketOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketOutlineIcon: FC<IBasketOutlineIconProps> = memo(props => {
  return <BasketOutlineSvg {...props} />;
});
