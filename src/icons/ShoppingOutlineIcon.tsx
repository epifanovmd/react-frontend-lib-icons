import React, { FC, memo } from 'react';
import ShoppingOutlineSvg from '../svg/shopping-outline.svg';

export interface IShoppingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoppingOutlineIcon: FC<IShoppingOutlineIconProps> = memo(props => {
  return <ShoppingOutlineSvg {...props} />;
});
