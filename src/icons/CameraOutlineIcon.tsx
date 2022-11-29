import React, { FC, memo } from 'react';
import CameraOutlineSvg from '../svg/camera-outline.svg';

export interface ICameraOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraOutlineIcon: FC<ICameraOutlineIconProps> = memo(props => {
  return <CameraOutlineSvg {...props} />;
});
