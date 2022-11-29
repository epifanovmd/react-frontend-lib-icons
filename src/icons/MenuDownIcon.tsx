import React, { FC, memo } from 'react';
import MenuDownSvg from '../svg/menu-down.svg';

export interface IMenuDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuDownIcon: FC<IMenuDownIconProps> = memo(props => {
  return <MenuDownSvg {...props} />;
});
