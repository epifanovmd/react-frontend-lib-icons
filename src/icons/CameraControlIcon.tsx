import React, { FC, memo } from 'react';
import CameraControlSvg from '../svg/camera-control.svg';

export interface ICameraControlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraControlIcon: FC<ICameraControlIconProps> = memo(props => {
  return <CameraControlSvg {...props} />;
});
