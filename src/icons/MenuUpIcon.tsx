import React, { FC, memo } from 'react';
import MenuUpSvg from '../svg/menu-up.svg';

export interface IMenuUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuUpIcon: FC<IMenuUpIconProps> = memo(props => {
  return <MenuUpSvg {...props} />;
});
