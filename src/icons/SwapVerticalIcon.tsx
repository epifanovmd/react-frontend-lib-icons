import React, { FC, memo } from 'react';
import SwapVerticalSvg from '../svg/swap-vertical.svg';

export interface ISwapVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwapVerticalIcon: FC<ISwapVerticalIconProps> = memo(props => {
  return <SwapVerticalSvg {...props} />;
});
