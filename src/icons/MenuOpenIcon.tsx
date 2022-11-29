import React, { FC, memo } from 'react';
import MenuOpenSvg from '../svg/menu-open.svg';

export interface IMenuOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuOpenIcon: FC<IMenuOpenIconProps> = memo(props => {
  return <MenuOpenSvg {...props} />;
});
