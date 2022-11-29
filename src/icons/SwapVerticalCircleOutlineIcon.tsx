import React, { FC, memo } from 'react';
import SwapVerticalCircleOutlineSvg from '../svg/swap-vertical-circle-outline.svg';

export interface ISwapVerticalCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapVerticalCircleOutlineIcon: FC<ISwapVerticalCircleOutlineIconProps> = memo(props => {
  return <SwapVerticalCircleOutlineSvg {...props} />;
});
