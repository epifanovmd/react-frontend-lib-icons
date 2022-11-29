import React, { FC, memo } from 'react';
import StorefrontCheckSvg from '../svg/storefront-check.svg';

export interface IStorefrontCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontCheckIcon: FC<IStorefrontCheckIconProps> = memo(props => {
  return <StorefrontCheckSvg {...props} />;
});
