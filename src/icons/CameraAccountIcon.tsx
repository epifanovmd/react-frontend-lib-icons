import React, { FC, memo } from 'react';
import CameraAccountSvg from '../svg/camera-account.svg';

export interface ICameraAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraAccountIcon: FC<ICameraAccountIconProps> = memo(props => {
  return <CameraAccountSvg {...props} />;
});
