import React, { FC, memo } from 'react';
import CurrencyFraSvg from '../svg/currency-fra.svg';

export interface ICurrencyFraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyFraIcon: FC<ICurrencyFraIconProps> = memo(props => {
  return <CurrencyFraSvg {...props} />;
});
