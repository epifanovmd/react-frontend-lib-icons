import React, { FC, memo } from 'react';
import HamburgerOffSvg from '../svg/hamburger-off.svg';

export interface IHamburgerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HamburgerOffIcon: FC<IHamburgerOffIconProps> = memo(props => {
  return <HamburgerOffSvg {...props} />;
});
