import React, { FC, memo } from 'react';
import NavigationVariantSvg from '../svg/navigation-variant.svg';

export interface INavigationVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NavigationVariantIcon: FC<INavigationVariantIconProps> = memo(props => {
  return <NavigationVariantSvg {...props} />;
});
