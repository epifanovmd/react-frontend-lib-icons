import React, { FC, memo } from 'react';
import PackageVariantRemoveSvg from '../svg/package-variant-remove.svg';

export interface IPackageVariantRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageVariantRemoveIcon: FC<IPackageVariantRemoveIconProps> = memo(props => {
  return <PackageVariantRemoveSvg {...props} />;
});
