import React, { FC, memo } from 'react';
import CameraMarkerOutlineSvg from '../svg/camera-marker-outline.svg';

export interface ICameraMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraMarkerOutlineIcon: FC<ICameraMarkerOutlineIconProps> = memo(props => {
  return <CameraMarkerOutlineSvg {...props} />;
});
