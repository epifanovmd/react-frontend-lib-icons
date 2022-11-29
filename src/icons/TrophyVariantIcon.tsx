import React, { FC, memo } from 'react';
import TrophyVariantSvg from '../svg/trophy-variant.svg';

export interface ITrophyVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrophyVariantIcon: FC<ITrophyVariantIconProps> = memo(props => {
  return <TrophyVariantSvg {...props} />;
});
