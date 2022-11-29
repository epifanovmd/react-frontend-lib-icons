import React, { FC, memo } from 'react';
import CubeOffOutlineSvg from '../svg/cube-off-outline.svg';

export interface ICubeOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CubeOffOutlineIcon: FC<ICubeOffOutlineIconProps> = memo(props => {
  return <CubeOffOutlineSvg {...props} />;
});
