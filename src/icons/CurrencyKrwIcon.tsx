import React, { FC, memo } from 'react';
import CurrencyKrwSvg from '../svg/currency-krw.svg';

export interface ICurrencyKrwIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyKrwIcon: FC<ICurrencyKrwIconProps> = memo(props => {
  return <CurrencyKrwSvg {...props} />;
});
