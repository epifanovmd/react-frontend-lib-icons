import React, { FC, memo } from 'react';
import SwapHorizontalBoldSvg from '../svg/swap-horizontal-bold.svg';

export interface ISwapHorizontalBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapHorizontalBoldIcon: FC<ISwapHorizontalBoldIconProps> = memo(props => {
  return <SwapHorizontalBoldSvg {...props} />;
});
