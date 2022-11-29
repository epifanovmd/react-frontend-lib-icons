import React, { FC, memo } from 'react';
import PackageCheckSvg from '../svg/package-check.svg';

export interface IPackageCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageCheckIcon: FC<IPackageCheckIconProps> = memo(props => {
  return <PackageCheckSvg {...props} />;
});
