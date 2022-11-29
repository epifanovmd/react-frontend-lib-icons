import React, { FC, memo } from 'react';
import StorefrontCheckOutlineSvg from '../svg/storefront-check-outline.svg';

export interface IStorefrontCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontCheckOutlineIcon: FC<IStorefrontCheckOutlineIconProps> = memo(props => {
  return <StorefrontCheckOutlineSvg {...props} />;
});
