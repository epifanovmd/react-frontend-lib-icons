import React, { FC, memo } from 'react';
import CurrencyUsdSvg from '../svg/currency-usd.svg';

export interface ICurrencyUsdIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyUsdIcon: FC<ICurrencyUsdIconProps> = memo(props => {
  return <CurrencyUsdSvg {...props} />;
});
