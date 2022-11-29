import React, { FC, memo } from 'react';
import CurrencyEurOffSvg from '../svg/currency-eur-off.svg';

export interface ICurrencyEurOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyEurOffIcon: FC<ICurrencyEurOffIconProps> = memo(props => {
  return <CurrencyEurOffSvg {...props} />;
});
