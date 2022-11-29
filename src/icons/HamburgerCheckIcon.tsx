import React, { FC, memo } from 'react';
import HamburgerCheckSvg from '../svg/hamburger-check.svg';

export interface IHamburgerCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HamburgerCheckIcon: FC<IHamburgerCheckIconProps> = memo(props => {
  return <HamburgerCheckSvg {...props} />;
});
