import React, { FC, memo } from 'react';
import MenuSvg from '../svg/menu.svg';

export interface IMenuIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuIcon: FC<IMenuIconProps> = memo(props => {
  return <MenuSvg {...props} />;
});
