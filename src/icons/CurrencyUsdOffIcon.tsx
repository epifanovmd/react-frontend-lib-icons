import React, { FC, memo } from 'react';
import CurrencyUsdOffSvg from '../svg/currency-usd-off.svg';

export interface ICurrencyUsdOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyUsdOffIcon: FC<ICurrencyUsdOffIconProps> = memo(props => {
  return <CurrencyUsdOffSvg {...props} />;
});
