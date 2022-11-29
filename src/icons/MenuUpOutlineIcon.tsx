import React, { FC, memo } from 'react';
import MenuUpOutlineSvg from '../svg/menu-up-outline.svg';

export interface IMenuUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuUpOutlineIcon: FC<IMenuUpOutlineIconProps> = memo(props => {
  return <MenuUpOutlineSvg {...props} />;
});
