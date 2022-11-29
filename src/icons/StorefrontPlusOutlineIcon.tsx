import React, { FC, memo } from 'react';
import StorefrontPlusOutlineSvg from '../svg/storefront-plus-outline.svg';

export interface IStorefrontPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontPlusOutlineIcon: FC<IStorefrontPlusOutlineIconProps> = memo(props => {
  return <StorefrontPlusOutlineSvg {...props} />;
});
