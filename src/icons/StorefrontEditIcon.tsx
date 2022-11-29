import React, { FC, memo } from 'react';
import StorefrontEditSvg from '../svg/storefront-edit.svg';

export interface IStorefrontEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorefrontEditIcon: FC<IStorefrontEditIconProps> = memo(props => {
  return <StorefrontEditSvg {...props} />;
});
