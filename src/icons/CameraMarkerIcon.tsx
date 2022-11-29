import React, { FC, memo } from 'react';
import CameraMarkerSvg from '../svg/camera-marker.svg';

export interface ICameraMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraMarkerIcon: FC<ICameraMarkerIconProps> = memo(props => {
  return <CameraMarkerSvg {...props} />;
});
