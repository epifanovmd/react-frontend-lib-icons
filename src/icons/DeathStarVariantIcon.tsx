import React, { FC, memo } from 'react';
import DeathStarVariantSvg from '../svg/death-star-variant.svg';

export interface IDeathStarVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeathStarVariantIcon: FC<IDeathStarVariantIconProps> = memo(props => {
  return <DeathStarVariantSvg {...props} />;
});
