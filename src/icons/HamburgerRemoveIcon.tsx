import React, { FC, memo } from 'react';
import HamburgerRemoveSvg from '../svg/hamburger-remove.svg';

export interface IHamburgerRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HamburgerRemoveIcon: FC<IHamburgerRemoveIconProps> = memo(props => {
  return <HamburgerRemoveSvg {...props} />;
});
