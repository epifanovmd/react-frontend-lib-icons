import React, { FC, memo } from 'react';
import OrbitVariantSvg from '../svg/orbit-variant.svg';

export interface IOrbitVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrbitVariantIcon: FC<IOrbitVariantIconProps> = memo(props => {
  return <OrbitVariantSvg {...props} />;
});
