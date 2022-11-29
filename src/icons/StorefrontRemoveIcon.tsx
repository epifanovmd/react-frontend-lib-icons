import React, { FC, memo } from 'react';
import StorefrontRemoveSvg from '../svg/storefront-remove.svg';

export interface IStorefrontRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontRemoveIcon: FC<IStorefrontRemoveIconProps> = memo(props => {
  return <StorefrontRemoveSvg {...props} />;
});
