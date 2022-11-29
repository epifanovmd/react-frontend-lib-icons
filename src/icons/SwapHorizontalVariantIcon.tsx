import React, { FC, memo } from 'react';
import SwapHorizontalVariantSvg from '../svg/swap-horizontal-variant.svg';

export interface ISwapHorizontalVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapHorizontalVariantIcon: FC<ISwapHorizontalVariantIconProps> = memo(props => {
  return <SwapHorizontalVariantSvg {...props} />;
});
