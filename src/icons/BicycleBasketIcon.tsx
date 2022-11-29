import React, { FC, memo } from 'react';
import BicycleBasketSvg from '../svg/bicycle-basket.svg';

export interface IBicycleBasketIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BicycleBasketIcon: FC<IBicycleBasketIconProps> = memo(props => {
  return <BicycleBasketSvg {...props} />;
});
