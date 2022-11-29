import React, { FC, memo } from 'react';
import CameraTimerSvg from '../svg/camera-timer.svg';

export interface ICameraTimerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraTimerIcon: FC<ICameraTimerIconProps> = memo(props => {
  return <CameraTimerSvg {...props} />;
});
