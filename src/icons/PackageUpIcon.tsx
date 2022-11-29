import React, { FC, memo } from 'react';
import PackageUpSvg from '../svg/package-up.svg';

export interface IPackageUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PackageUpIcon: FC<IPackageUpIconProps> = memo(props => {
  return <PackageUpSvg {...props} />;
});
