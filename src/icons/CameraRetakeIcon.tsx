import React, { FC, memo } from 'react';
import CameraRetakeSvg from '../svg/camera-retake.svg';

export interface ICameraRetakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraRetakeIcon: FC<ICameraRetakeIconProps> = memo(props => {
  return <CameraRetakeSvg {...props} />;
});
