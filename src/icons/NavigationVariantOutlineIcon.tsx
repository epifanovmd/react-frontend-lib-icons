import React, { FC, memo } from 'react';
import NavigationVariantOutlineSvg from '../svg/navigation-variant-outline.svg';

export interface INavigationVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NavigationVariantOutlineIcon: FC<INavigationVariantOutlineIconProps> = memo(props => {
  return <NavigationVariantOutlineSvg {...props} />;
});
