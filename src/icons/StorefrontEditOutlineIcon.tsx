import React, { FC, memo } from 'react';
import StorefrontEditOutlineSvg from '../svg/storefront-edit-outline.svg';

export interface IStorefrontEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontEditOutlineIcon: FC<IStorefrontEditOutlineIconProps> = memo(props => {
  return <StorefrontEditOutlineSvg {...props} />;
});
