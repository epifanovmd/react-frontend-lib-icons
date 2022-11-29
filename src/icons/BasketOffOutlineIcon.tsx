import React, { FC, memo } from 'react';
import BasketOffOutlineSvg from '../svg/basket-off-outline.svg';

export interface IBasketOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketOffOutlineIcon: FC<IBasketOffOutlineIconProps> = memo(props => {
  return <BasketOffOutlineSvg {...props} />;
});
