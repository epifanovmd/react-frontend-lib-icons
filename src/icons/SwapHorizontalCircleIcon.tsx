import React, { FC, memo } from 'react';
import SwapHorizontalCircleSvg from '../svg/swap-horizontal-circle.svg';

export interface ISwapHorizontalCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapHorizontalCircleIcon: FC<ISwapHorizontalCircleIconProps> = memo(props => {
  return <SwapHorizontalCircleSvg {...props} />;
});
