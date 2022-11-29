import React, { FC, memo } from 'react';
import Rotate360Svg from '../svg/rotate-360.svg';

export interface IRotate360IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rotate360Icon: FC<IRotate360IconProps> = memo(props => {
  return <Rotate360Svg {...props} />;
});
