import React, { FC, memo } from 'react';
import MenuRightSvg from '../svg/menu-right.svg';

export interface IMenuRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuRightIcon: FC<IMenuRightIconProps> = memo(props => {
  return <MenuRightSvg {...props} />;
});
