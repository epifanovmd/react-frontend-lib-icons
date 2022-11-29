import React, { FC, memo } from 'react';
import WallSconceFlatVariantSvg from '../svg/wall-sconce-flat-variant.svg';

export interface IWallSconceFlatVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceFlatVariantIcon: FC<IWallSconceFlatVariantIconProps> = memo(props => {
  return <WallSconceFlatVariantSvg {...props} />;
});
