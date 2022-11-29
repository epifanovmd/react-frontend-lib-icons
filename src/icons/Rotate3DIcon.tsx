import React, { FC, memo } from 'react';
import Rotate3DSvg from '../svg/rotate-3d.svg';

export interface IRotate3DIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rotate3DIcon: FC<IRotate3DIconProps> = memo(props => {
  return <Rotate3DSvg {...props} />;
});
