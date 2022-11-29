import React, { FC, memo } from 'react';
import BasketOffSvg from '../svg/basket-off.svg';

export interface IBasketOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketOffIcon: FC<IBasketOffIconProps> = memo(props => {
  return <BasketOffSvg {...props} />;
});
