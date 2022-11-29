import React, { FC, memo } from 'react';
import CameraLockOpenSvg from '../svg/camera-lock-open.svg';

export interface ICameraLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraLockOpenIcon: FC<ICameraLockOpenIconProps> = memo(props => {
  return <CameraLockOpenSvg {...props} />;
});
