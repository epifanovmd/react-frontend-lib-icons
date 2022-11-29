import React, { FC, memo } from 'react';
import CameraWirelessSvg from '../svg/camera-wireless.svg';

export interface ICameraWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraWirelessIcon: FC<ICameraWirelessIconProps> = memo(props => {
  return <CameraWirelessSvg {...props} />;
});
