import React, { FC, memo } from 'react';
import CameraFlipSvg from '../svg/camera-flip.svg';

export interface ICameraFlipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraFlipIcon: FC<ICameraFlipIconProps> = memo(props => {
  return <CameraFlipSvg {...props} />;
});
