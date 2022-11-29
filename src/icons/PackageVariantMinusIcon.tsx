import React, { FC, memo } from 'react';
import PackageVariantMinusSvg from '../svg/package-variant-minus.svg';

export interface IPackageVariantMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantMinusIcon: FC<IPackageVariantMinusIconProps> = memo(props => {
  return <PackageVariantMinusSvg {...props} />;
});
