import React, { FC, memo } from 'react';
import ArrowProjectileMultipleSvg from '../svg/arrow-projectile-multiple.svg';

export interface IArrowProjectileMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowProjectileMultipleIcon: FC<IArrowProjectileMultipleIconProps> = memo(props => {
  return <ArrowProjectileMultipleSvg {...props} />;
});
