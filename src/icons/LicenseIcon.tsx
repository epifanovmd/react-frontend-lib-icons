import React, { FC, memo } from 'react';
import LicenseSvg from '../svg/license.svg';

export interface ILicenseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LicenseIcon: FC<ILicenseIconProps> = memo(props => {
  return <LicenseSvg {...props} />;
});
