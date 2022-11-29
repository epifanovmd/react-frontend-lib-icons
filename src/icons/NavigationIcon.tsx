import React, { FC, memo } from 'react';
import NavigationSvg from '../svg/navigation.svg';

export interface INavigationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NavigationIcon: FC<INavigationIconProps> = memo(props => {
  return <NavigationSvg {...props} />;
});
