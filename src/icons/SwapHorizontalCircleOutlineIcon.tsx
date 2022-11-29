import React, { FC, memo } from 'react';
import SwapHorizontalCircleOutlineSvg from '../svg/swap-horizontal-circle-outline.svg';

export interface ISwapHorizontalCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapHorizontalCircleOutlineIcon: FC<ISwapHorizontalCircleOutlineIconProps> = memo(props => {
  return <SwapHorizontalCircleOutlineSvg {...props} />;
});
