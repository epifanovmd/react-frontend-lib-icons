import React, { FC, memo } from 'react';
import CloudLockOutlineSvg from '../svg/cloud-lock-outline.svg';

export interface ICloudLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudLockOutlineIcon: FC<ICloudLockOutlineIconProps> = memo(props => {
  return <CloudLockOutlineSvg {...props} />;
});
