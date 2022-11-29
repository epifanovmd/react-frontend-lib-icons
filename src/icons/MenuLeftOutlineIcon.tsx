import React, { FC, memo } from 'react';
import MenuLeftOutlineSvg from '../svg/menu-left-outline.svg';

export interface IMenuLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuLeftOutlineIcon: FC<IMenuLeftOutlineIconProps> = memo(props => {
  return <MenuLeftOutlineSvg {...props} />;
});
