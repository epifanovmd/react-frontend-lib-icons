import React, { FC, memo } from 'react';
import StorefrontMinusOutlineSvg from '../svg/storefront-minus-outline.svg';

export interface IStorefrontMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontMinusOutlineIcon: FC<IStorefrontMinusOutlineIconProps> = memo(props => {
  return <StorefrontMinusOutlineSvg {...props} />;
});
