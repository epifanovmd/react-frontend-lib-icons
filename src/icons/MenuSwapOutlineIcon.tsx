import React, { FC, memo } from 'react';
import MenuSwapOutlineSvg from '../svg/menu-swap-outline.svg';

export interface IMenuSwapOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuSwapOutlineIcon: FC<IMenuSwapOutlineIconProps> = memo(props => {
  return <MenuSwapOutlineSvg {...props} />;
});
