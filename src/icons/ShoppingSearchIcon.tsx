import React, { FC, memo } from 'react';
import ShoppingSearchSvg from '../svg/shopping-search.svg';

export interface IShoppingSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoppingSearchIcon: FC<IShoppingSearchIconProps> = memo(props => {
  return <ShoppingSearchSvg {...props} />;
});
