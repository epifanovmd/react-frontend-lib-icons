import React, { FC, memo } from 'react';
import WallSconceFlatVariantOutlineSvg from '../svg/wall-sconce-flat-variant-outline.svg';

export interface IWallSconceFlatVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceFlatVariantOutlineIcon: FC<IWallSconceFlatVariantOutlineIconProps> = memo(props => {
  return <WallSconceFlatVariantOutlineSvg {...props} />;
});
