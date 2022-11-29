import React, { FC, memo } from 'react';
import StorefrontOutlineSvg from '../svg/storefront-outline.svg';

export interface IStorefrontOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontOutlineIcon: FC<IStorefrontOutlineIconProps> = memo(props => {
  return <StorefrontOutlineSvg {...props} />;
});
