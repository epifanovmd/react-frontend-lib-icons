import React, { FC, memo } from 'react';
import CubeSvg from '../svg/cube.svg';

export interface ICubeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CubeIcon: FC<ICubeIconProps> = memo(props => {
  return <CubeSvg {...props} />;
});
