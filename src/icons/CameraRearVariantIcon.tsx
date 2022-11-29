import React, { FC, memo } from 'react';
import CameraRearVariantSvg from '../svg/camera-rear-variant.svg';

export interface ICameraRearVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraRearVariantIcon: FC<ICameraRearVariantIconProps> = memo(props => {
  return <CameraRearVariantSvg {...props} />;
});
