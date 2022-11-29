import React, { FC, memo } from 'react';
import HamburgerMinusSvg from '../svg/hamburger-minus.svg';

export interface IHamburgerMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HamburgerMinusIcon: FC<IHamburgerMinusIconProps> = memo(props => {
  return <HamburgerMinusSvg {...props} />;
});
