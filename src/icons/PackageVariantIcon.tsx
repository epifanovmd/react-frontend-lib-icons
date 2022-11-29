import React, { FC, memo } from 'react';
import PackageVariantSvg from '../svg/package-variant.svg';

export interface IPackageVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantIcon: FC<IPackageVariantIconProps> = memo(props => {
  return <PackageVariantSvg {...props} />;
});
