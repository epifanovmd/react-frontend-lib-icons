import React, { FC, memo } from 'react';
import CameraLockOutlineSvg from '../svg/camera-lock-outline.svg';

export interface ICameraLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraLockOutlineIcon: FC<ICameraLockOutlineIconProps> = memo(props => {
  return <CameraLockOutlineSvg {...props} />;
});
