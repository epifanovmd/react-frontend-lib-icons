import React, { FC, memo } from 'react';
import ShoppingSvg from '../svg/shopping.svg';

export interface IShoppingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoppingIcon: FC<IShoppingIconProps> = memo(props => {
  return <ShoppingSvg {...props} />;
});
