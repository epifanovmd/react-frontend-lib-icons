import React, { FC, memo } from 'react';
import CurrencyEthSvg from '../svg/currency-eth.svg';

export interface ICurrencyEthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyEthIcon: FC<ICurrencyEthIconProps> = memo(props => {
  return <CurrencyEthSvg {...props} />;
});
