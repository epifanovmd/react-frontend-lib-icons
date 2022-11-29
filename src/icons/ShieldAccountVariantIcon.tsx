import React, { FC, memo } from 'react';
import ShieldAccountVariantSvg from '../svg/shield-account-variant.svg';

export interface IShieldAccountVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldAccountVariantIcon: FC<IShieldAccountVariantIconProps> = memo(props => {
  return <ShieldAccountVariantSvg {...props} />;
});
