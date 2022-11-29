import React, { FC, memo } from 'react';
import PackageVariantClosedSvg from '../svg/package-variant-closed.svg';

export interface IPackageVariantClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantClosedIcon: FC<IPackageVariantClosedIconProps> = memo(props => {
  return <PackageVariantClosedSvg {...props} />;
});
