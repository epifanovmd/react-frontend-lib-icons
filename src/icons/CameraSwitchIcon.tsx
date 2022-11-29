import React, { FC, memo } from 'react';
import CameraSwitchSvg from '../svg/camera-switch.svg';

export interface ICameraSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraSwitchIcon: FC<ICameraSwitchIconProps> = memo(props => {
  return <CameraSwitchSvg {...props} />;
});
