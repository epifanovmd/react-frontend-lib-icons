import React, { FC, memo } from 'react';
import WallSconceRoundVariantSvg from '../svg/wall-sconce-round-variant.svg';

export interface IWallSconceRoundVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceRoundVariantIcon: FC<IWallSconceRoundVariantIconProps> = memo(props => {
  return <WallSconceRoundVariantSvg {...props} />;
});
