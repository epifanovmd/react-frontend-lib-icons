import React, { FC, memo } from 'react';
import ShieldAccountVariantOutlineSvg from '../svg/shield-account-variant-outline.svg';

export interface IShieldAccountVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldAccountVariantOutlineIcon: FC<IShieldAccountVariantOutlineIconProps> = memo(props => {
  return <ShieldAccountVariantOutlineSvg {...props} />;
});
