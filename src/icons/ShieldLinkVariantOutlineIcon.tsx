import React, { FC, memo } from 'react';
import ShieldLinkVariantOutlineSvg from '../svg/shield-link-variant-outline.svg';

export interface IShieldLinkVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldLinkVariantOutlineIcon: FC<IShieldLinkVariantOutlineIconProps> = memo(props => {
  return <ShieldLinkVariantOutlineSvg {...props} />;
});
