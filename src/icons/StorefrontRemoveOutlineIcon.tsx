import React, { FC, memo } from 'react';
import StorefrontRemoveOutlineSvg from '../svg/storefront-remove-outline.svg';

export interface IStorefrontRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontRemoveOutlineIcon: FC<IStorefrontRemoveOutlineIconProps> = memo(props => {
  return <StorefrontRemoveOutlineSvg {...props} />;
});
