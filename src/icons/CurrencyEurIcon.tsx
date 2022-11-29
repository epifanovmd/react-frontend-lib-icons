import React, { FC, memo } from 'react';
import CurrencyEurSvg from '../svg/currency-eur.svg';

export interface ICurrencyEurIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyEurIcon: FC<ICurrencyEurIconProps> = memo(props => {
  return <CurrencyEurSvg {...props} />;
});
