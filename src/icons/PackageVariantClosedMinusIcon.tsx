import React, { FC, memo } from 'react';
import PackageVariantClosedMinusSvg from '../svg/package-variant-closed-minus.svg';

export interface IPackageVariantClosedMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantClosedMinusIcon: FC<IPackageVariantClosedMinusIconProps> = memo(props => {
  return <PackageVariantClosedMinusSvg {...props} />;
});
