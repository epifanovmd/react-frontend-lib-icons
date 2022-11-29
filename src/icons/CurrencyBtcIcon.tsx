import React, { FC, memo } from 'react';
import CurrencyBtcSvg from '../svg/currency-btc.svg';

export interface ICurrencyBtcIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyBtcIcon: FC<ICurrencyBtcIconProps> = memo(props => {
  return <CurrencyBtcSvg {...props} />;
});
