import React, { FC, memo } from 'react';
import CameraGoproSvg from '../svg/camera-gopro.svg';

export interface ICameraGoproIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraGoproIcon: FC<ICameraGoproIconProps> = memo(props => {
  return <CameraGoproSvg {...props} />;
});
