import React, { FC, memo } from 'react';
import PackageVariantClosedPlusSvg from '../svg/package-variant-closed-plus.svg';

export interface IPackageVariantClosedPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantClosedPlusIcon: FC<IPackageVariantClosedPlusIconProps> = memo(props => {
  return <PackageVariantClosedPlusSvg {...props} />;
});
