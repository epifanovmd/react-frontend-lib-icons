import React, { FC, memo } from 'react';
import CameraPlusOutlineSvg from '../svg/camera-plus-outline.svg';

export interface ICameraPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraPlusOutlineIcon: FC<ICameraPlusOutlineIconProps> = memo(props => {
  return <CameraPlusOutlineSvg {...props} />;
});
