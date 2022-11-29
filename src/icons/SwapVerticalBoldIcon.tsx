import React, { FC, memo } from 'react';
import SwapVerticalBoldSvg from '../svg/swap-vertical-bold.svg';

export interface ISwapVerticalBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapVerticalBoldIcon: FC<ISwapVerticalBoldIconProps> = memo(props => {
  return <SwapVerticalBoldSvg {...props} />;
});
