import React, { FC, memo } from 'react';
import SphereSvg from '../svg/sphere.svg';

export interface ISphereIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SphereIcon: FC<ISphereIconProps> = memo(props => {
  return <SphereSvg {...props} />;
});
