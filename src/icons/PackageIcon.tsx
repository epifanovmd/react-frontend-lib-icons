import React, { FC, memo } from 'react';
import PackageSvg from '../svg/package.svg';

export interface IPackageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageIcon: FC<IPackageIconProps> = memo(props => {
  return <PackageSvg {...props} />;
});
