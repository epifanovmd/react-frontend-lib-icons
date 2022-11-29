import React, { FC, memo } from 'react';
import CameraEnhanceOutlineSvg from '../svg/camera-enhance-outline.svg';

export interface ICameraEnhanceOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraEnhanceOutlineIcon: FC<ICameraEnhanceOutlineIconProps> = memo(props => {
  return <CameraEnhanceOutlineSvg {...props} />;
});
