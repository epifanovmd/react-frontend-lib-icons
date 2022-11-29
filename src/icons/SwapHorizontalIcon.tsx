import React, { FC, memo } from 'react';
import SwapHorizontalSvg from '../svg/swap-horizontal.svg';

export interface ISwapHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapHorizontalIcon: FC<ISwapHorizontalIconProps> = memo(props => {
  return <SwapHorizontalSvg {...props} />;
});
