import React, { FC, memo } from 'react';
import CameraFlipOutlineSvg from '../svg/camera-flip-outline.svg';

export interface ICameraFlipOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraFlipOutlineIcon: FC<ICameraFlipOutlineIconProps> = memo(props => {
  return <CameraFlipOutlineSvg {...props} />;
});
