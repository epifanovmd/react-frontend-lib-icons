import React, { FC, memo } from 'react';
import ArrowProjectileSvg from '../svg/arrow-projectile.svg';

export interface IArrowProjectileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowProjectileIcon: FC<IArrowProjectileIconProps> = memo(props => {
  return <ArrowProjectileSvg {...props} />;
});
