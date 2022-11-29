import React, { FC, memo } from 'react';
import PackageVariantPlusSvg from '../svg/package-variant-plus.svg';

export interface IPackageVariantPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantPlusIcon: FC<IPackageVariantPlusIconProps> = memo(props => {
  return <PackageVariantPlusSvg {...props} />;
});
