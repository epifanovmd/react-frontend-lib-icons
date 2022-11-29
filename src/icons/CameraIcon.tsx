import React, { FC, memo } from 'react';
import CameraSvg from '../svg/camera.svg';

export interface ICameraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraIcon: FC<ICameraIconProps> = memo(props => {
  return <CameraSvg {...props} />;
});
