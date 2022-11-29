import React, { FC, memo } from 'react';
import BasketSvg from '../svg/basket.svg';

export interface IBasketIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketIcon: FC<IBasketIconProps> = memo(props => {
  return <BasketSvg {...props} />;
});
