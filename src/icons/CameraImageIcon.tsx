import React, { FC, memo } from 'react';
import CameraImageSvg from '../svg/camera-image.svg';

export interface ICameraImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraImageIcon: FC<ICameraImageIconProps> = memo(props => {
  return <CameraImageSvg {...props} />;
});
