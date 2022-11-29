import React, { FC, memo } from 'react';
import CloudLockSvg from '../svg/cloud-lock.svg';

export interface ICloudLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudLockIcon: FC<ICloudLockIconProps> = memo(props => {
  return <CloudLockSvg {...props} />;
});
