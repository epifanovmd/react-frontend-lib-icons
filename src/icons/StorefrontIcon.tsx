import React, { FC, memo } from 'react';
import StorefrontSvg from '../svg/storefront.svg';

export interface IStorefrontIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontIcon: FC<IStorefrontIconProps> = memo(props => {
  return <StorefrontSvg {...props} />;
});
