import React, { FC, memo } from 'react';
import CameraOffSvg from '../svg/camera-off.svg';

export interface ICameraOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraOffIcon: FC<ICameraOffIconProps> = memo(props => {
  return <CameraOffSvg {...props} />;
});
