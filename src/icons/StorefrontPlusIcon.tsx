import React, { FC, memo } from 'react';
import StorefrontPlusSvg from '../svg/storefront-plus.svg';

export interface IStorefrontPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontPlusIcon: FC<IStorefrontPlusIconProps> = memo(props => {
  return <StorefrontPlusSvg {...props} />;
});
