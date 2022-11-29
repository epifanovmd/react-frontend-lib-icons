import React, { FC, memo } from 'react';
import CameraWirelessOutlineSvg from '../svg/camera-wireless-outline.svg';

export interface ICameraWirelessOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraWirelessOutlineIcon: FC<ICameraWirelessOutlineIconProps> = memo(props => {
  return <CameraWirelessOutlineSvg {...props} />;
});
