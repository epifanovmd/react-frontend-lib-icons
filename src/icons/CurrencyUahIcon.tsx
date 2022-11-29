import React, { FC, memo } from 'react';
import CurrencyUahSvg from '../svg/currency-uah.svg';

export interface ICurrencyUahIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyUahIcon: FC<ICurrencyUahIconProps> = memo(props => {
  return <CurrencyUahSvg {...props} />;
});
