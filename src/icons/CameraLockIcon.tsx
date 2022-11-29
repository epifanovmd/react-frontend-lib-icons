import React, { FC, memo } from 'react';
import CameraLockSvg from '../svg/camera-lock.svg';

export interface ICameraLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraLockIcon: FC<ICameraLockIconProps> = memo(props => {
  return <CameraLockSvg {...props} />;
});
