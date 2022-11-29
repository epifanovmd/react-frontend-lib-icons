import React, { FC, memo } from 'react';
import CameraOffOutlineSvg from '../svg/camera-off-outline.svg';

export interface ICameraOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraOffOutlineIcon: FC<ICameraOffOutlineIconProps> = memo(props => {
  return <CameraOffOutlineSvg {...props} />;
});
