import React, { FC, memo } from 'react';
import CameraFrontSvg from '../svg/camera-front.svg';

export interface ICameraFrontIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraFrontIcon: FC<ICameraFrontIconProps> = memo(props => {
  return <CameraFrontSvg {...props} />;
});
