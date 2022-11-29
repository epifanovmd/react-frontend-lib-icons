import React, { FC, memo } from 'react';
import HandCoinSvg from '../svg/hand-coin.svg';

export interface IHandCoinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandCoinIcon: FC<IHandCoinIconProps> = memo(props => {
  return <HandCoinSvg {...props} />;
});
