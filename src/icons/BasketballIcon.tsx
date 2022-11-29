import React, { FC, memo } from 'react';
import BasketballSvg from '../svg/basketball.svg';

export interface IBasketballIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketballIcon: FC<IBasketballIconProps> = memo(props => {
  return <BasketballSvg {...props} />;
});
