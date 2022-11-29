import React, { FC, memo } from 'react';
import ShoppingSearchOutlineSvg from '../svg/shopping-search-outline.svg';

export interface IShoppingSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoppingSearchOutlineIcon: FC<IShoppingSearchOutlineIconProps> = memo(props => {
  return <ShoppingSearchOutlineSvg {...props} />;
});
