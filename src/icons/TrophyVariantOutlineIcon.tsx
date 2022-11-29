import React, { FC, memo } from 'react';
import TrophyVariantOutlineSvg from '../svg/trophy-variant-outline.svg';

export interface ITrophyVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrophyVariantOutlineIcon: FC<ITrophyVariantOutlineIconProps> = memo(props => {
  return <TrophyVariantOutlineSvg {...props} />;
});
