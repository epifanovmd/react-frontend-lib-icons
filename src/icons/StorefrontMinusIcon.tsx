import React, { FC, memo } from 'react';
import StorefrontMinusSvg from '../svg/storefront-minus.svg';

export interface IStorefrontMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontMinusIcon: FC<IStorefrontMinusIconProps> = memo(props => {
  return <StorefrontMinusSvg {...props} />;
});
