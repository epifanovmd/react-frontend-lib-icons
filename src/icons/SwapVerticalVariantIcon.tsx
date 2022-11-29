import React, { FC, memo } from 'react';
import SwapVerticalVariantSvg from '../svg/swap-vertical-variant.svg';

export interface ISwapVerticalVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapVerticalVariantIcon: FC<ISwapVerticalVariantIconProps> = memo(props => {
  return <SwapVerticalVariantSvg {...props} />;
});
