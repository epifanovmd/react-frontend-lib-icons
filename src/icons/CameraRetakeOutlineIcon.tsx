import React, { FC, memo } from 'react';
import CameraRetakeOutlineSvg from '../svg/camera-retake-outline.svg';

export interface ICameraRetakeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraRetakeOutlineIcon: FC<ICameraRetakeOutlineIconProps> = memo(props => {
  return <CameraRetakeOutlineSvg {...props} />;
});
