import React, { FC, memo } from 'react';
import CameraFrontVariantSvg from '../svg/camera-front-variant.svg';

export interface ICameraFrontVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraFrontVariantIcon: FC<ICameraFrontVariantIconProps> = memo(props => {
  return <CameraFrontVariantSvg {...props} />;
});
