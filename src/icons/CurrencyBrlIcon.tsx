import React, { FC, memo } from 'react';
import CurrencyBrlSvg from '../svg/currency-brl.svg';

export interface ICurrencyBrlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyBrlIcon: FC<ICurrencyBrlIconProps> = memo(props => {
  return <CurrencyBrlSvg {...props} />;
});
