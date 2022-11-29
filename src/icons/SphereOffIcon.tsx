import React, { FC, memo } from 'react';
import SphereOffSvg from '../svg/sphere-off.svg';

export interface ISphereOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SphereOffIcon: FC<ISphereOffIconProps> = memo(props => {
  return <SphereOffSvg {...props} />;
});
