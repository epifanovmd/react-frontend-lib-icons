import React, { FC, memo } from 'react';
import BitcoinSvg from '../svg/bitcoin.svg';

export interface IBitcoinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BitcoinIcon: FC<IBitcoinIconProps> = memo(props => {
  return <BitcoinSvg {...props} />;
});
