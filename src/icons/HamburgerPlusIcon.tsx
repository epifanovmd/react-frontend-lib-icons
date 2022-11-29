import React, { FC, memo } from 'react';
import HamburgerPlusSvg from '../svg/hamburger-plus.svg';

export interface IHamburgerPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HamburgerPlusIcon: FC<IHamburgerPlusIconProps> = memo(props => {
  return <HamburgerPlusSvg {...props} />;
});
