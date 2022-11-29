import React, { FC, memo } from 'react';
import CubeUnfoldedSvg from '../svg/cube-unfolded.svg';

export interface ICubeUnfoldedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CubeUnfoldedIcon: FC<ICubeUnfoldedIconProps> = memo(props => {
  return <CubeUnfoldedSvg {...props} />;
});
