import React, { FC, memo } from 'react';
import PackageVariantClosedCheckSvg from '../svg/package-variant-closed-check.svg';

export interface IPackageVariantClosedCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantClosedCheckIcon: FC<IPackageVariantClosedCheckIconProps> = memo(props => {
  return <PackageVariantClosedCheckSvg {...props} />;
});
