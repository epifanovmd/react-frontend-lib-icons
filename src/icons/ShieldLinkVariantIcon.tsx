import React, { FC, memo } from 'react';
import ShieldLinkVariantSvg from '../svg/shield-link-variant.svg';

export interface IShieldLinkVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldLinkVariantIcon: FC<IShieldLinkVariantIconProps> = memo(props => {
  return <ShieldLinkVariantSvg {...props} />;
});
