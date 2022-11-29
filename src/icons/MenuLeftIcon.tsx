import React, { FC, memo } from 'react';
import MenuLeftSvg from '../svg/menu-left.svg';

export interface IMenuLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuLeftIcon: FC<IMenuLeftIconProps> = memo(props => {
  return <MenuLeftSvg {...props} />;
});
