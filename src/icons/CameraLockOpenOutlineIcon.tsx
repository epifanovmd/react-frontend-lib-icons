import React, { FC, memo } from 'react';
import CameraLockOpenOutlineSvg from '../svg/camera-lock-open-outline.svg';

export interface ICameraLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraLockOpenOutlineIcon: FC<ICameraLockOpenOutlineIconProps> = memo(props => {
  return <CameraLockOpenOutlineSvg {...props} />;
});
