import React, { FC, memo } from 'react';
import CameraPartyModeSvg from '../svg/camera-party-mode.svg';

export interface ICameraPartyModeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraPartyModeIcon: FC<ICameraPartyModeIconProps> = memo(props => {
  return <CameraPartyModeSvg {...props} />;
});
