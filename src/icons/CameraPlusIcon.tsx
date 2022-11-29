import React, { FC, memo } from 'react';
import CameraPlusSvg from '../svg/camera-plus.svg';

export interface ICameraPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraPlusIcon: FC<ICameraPlusIconProps> = memo(props => {
  return <CameraPlusSvg {...props} />;
});
