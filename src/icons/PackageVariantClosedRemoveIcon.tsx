import React, { FC, memo } from 'react';
import PackageVariantClosedRemoveSvg from '../svg/package-variant-closed-remove.svg';

export interface IPackageVariantClosedRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantClosedRemoveIcon: FC<IPackageVariantClosedRemoveIconProps> = memo(props => {
  return <PackageVariantClosedRemoveSvg {...props} />;
});
