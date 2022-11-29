import React, { FC, memo } from 'react';
import CloudLockOpenSvg from '../svg/cloud-lock-open.svg';

export interface ICloudLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudLockOpenIcon: FC<ICloudLockOpenIconProps> = memo(props => {
  return <CloudLockOpenSvg {...props} />;
});
