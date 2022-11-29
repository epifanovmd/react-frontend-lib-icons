import React, { FC, memo } from 'react';
import CameraSwitchOutlineSvg from '../svg/camera-switch-outline.svg';

export interface ICameraSwitchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraSwitchOutlineIcon: FC<ICameraSwitchOutlineIconProps> = memo(props => {
  return <CameraSwitchOutlineSvg {...props} />;
});
