import React, { FC, memo } from 'react';
import CubeOffSvg from '../svg/cube-off.svg';

export interface ICubeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CubeOffIcon: FC<ICubeOffIconProps> = memo(props => {
  return <CubeOffSvg {...props} />;
});
