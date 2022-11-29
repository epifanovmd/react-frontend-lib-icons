import React, { FC, memo } from 'react';
import MenuRightOutlineSvg from '../svg/menu-right-outline.svg';

export interface IMenuRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenuRightOutlineIcon: FC<IMenuRightOutlineIconProps> = memo(props => {
  return <MenuRightOutlineSvg {...props} />;
});
