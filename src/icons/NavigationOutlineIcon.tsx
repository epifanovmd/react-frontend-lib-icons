import React, { FC, memo } from 'react';
import NavigationOutlineSvg from '../svg/navigation-outline.svg';

export interface INavigationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NavigationOutlineIcon: FC<INavigationOutlineIconProps> = memo(props => {
  return <NavigationOutlineSvg {...props} />;
});
