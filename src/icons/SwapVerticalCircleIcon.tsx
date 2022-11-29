import React, { FC, memo } from 'react';
import SwapVerticalCircleSvg from '../svg/swap-vertical-circle.svg';

export interface ISwapVerticalCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapVerticalCircleIcon: FC<ISwapVerticalCircleIconProps> = memo(props => {
  return <SwapVerticalCircleSvg {...props} />;
});
