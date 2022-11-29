import React, { FC, memo } from 'react';
import CoffeeSvg from '../svg/coffee.svg';

export interface ICoffeeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoffeeIcon: FC<ICoffeeIconProps> = memo(props => {
  return <CoffeeSvg {...props} />;
});
