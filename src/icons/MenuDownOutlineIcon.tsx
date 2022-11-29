import React, { FC, memo } from 'react';
import MenuDownOutlineSvg from '../svg/menu-down-outline.svg';

export interface IMenuDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuDownOutlineIcon: FC<IMenuDownOutlineIconProps> = memo(props => {
  return <MenuDownOutlineSvg {...props} />;
});
