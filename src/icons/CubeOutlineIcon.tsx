import React, { FC, memo } from 'react';
import CubeOutlineSvg from '../svg/cube-outline.svg';

export interface ICubeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CubeOutlineIcon: FC<ICubeOutlineIconProps> = memo(props => {
  return <CubeOutlineSvg {...props} />;
});
