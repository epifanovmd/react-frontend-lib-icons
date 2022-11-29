import React, { FC, memo } from 'react';
import CameraIrisSvg from '../svg/camera-iris.svg';

export interface ICameraIrisIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraIrisIcon: FC<ICameraIrisIconProps> = memo(props => {
  return <CameraIrisSvg {...props} />;
});
