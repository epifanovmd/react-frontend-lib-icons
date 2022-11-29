import React, { FC, memo } from 'react';
import BasketPlusOutlineSvg from '../svg/basket-plus-outline.svg';

export interface IBasketPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketPlusOutlineIcon: FC<IBasketPlusOutlineIconProps> = memo(props => {
  return <BasketPlusOutlineSvg {...props} />;
});
