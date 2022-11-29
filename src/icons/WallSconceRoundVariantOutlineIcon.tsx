import React, { FC, memo } from 'react';
import WallSconceRoundVariantOutlineSvg from '../svg/wall-sconce-round-variant-outline.svg';

export interface IWallSconceRoundVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceRoundVariantOutlineIcon: FC<IWallSconceRoundVariantOutlineIconProps> = memo(props => {
  return <WallSconceRoundVariantOutlineSvg {...props} />;
});
