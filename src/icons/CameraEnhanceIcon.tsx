import React, { FC, memo } from 'react';
import CameraEnhanceSvg from '../svg/camera-enhance.svg';

export interface ICameraEnhanceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraEnhanceIcon: FC<ICameraEnhanceIconProps> = memo(props => {
  return <CameraEnhanceSvg {...props} />;
});
