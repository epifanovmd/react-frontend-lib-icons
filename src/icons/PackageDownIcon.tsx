import React, { FC, memo } from 'react';
import PackageDownSvg from '../svg/package-down.svg';

export interface IPackageDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageDownIcon: FC<IPackageDownIconProps> = memo(props => {
  return <PackageDownSvg {...props} />;
});
