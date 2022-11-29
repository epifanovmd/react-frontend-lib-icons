import React, { FC, memo } from 'react';
import MenuSwapSvg from '../svg/menu-swap.svg';

export interface IMenuSwapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuSwapIcon: FC<IMenuSwapIconProps> = memo(props => {
  return <MenuSwapSvg {...props} />;
});
