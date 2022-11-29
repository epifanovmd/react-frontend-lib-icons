import React, { FC, memo } from 'react';
import CloudLockOpenOutlineSvg from '../svg/cloud-lock-open-outline.svg';

export interface ICloudLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudLockOpenOutlineIcon: FC<ICloudLockOpenOutlineIconProps> = memo(props => {
  return <CloudLockOpenOutlineSvg {...props} />;
});
