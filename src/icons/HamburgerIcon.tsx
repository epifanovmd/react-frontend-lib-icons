import React, { FC, memo } from 'react';
import HamburgerSvg from '../svg/hamburger.svg';

export interface IHamburgerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HamburgerIcon: FC<IHamburgerIconProps> = memo(props => {
  return <HamburgerSvg {...props} />;
});
