import React, { FC, memo } from 'react';
import CameraRearSvg from '../svg/camera-rear.svg';

export interface ICameraRearIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraRearIcon: FC<ICameraRearIconProps> = memo(props => {
  return <CameraRearSvg {...props} />;
});
