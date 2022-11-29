import React, { FC, memo } from 'react';
import CameraBurstSvg from '../svg/camera-burst.svg';

export interface ICameraBurstIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraBurstIcon: FC<ICameraBurstIconProps> = memo(props => {
  return <CameraBurstSvg {...props} />;
});
