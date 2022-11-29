import React, { FC, memo } from 'react';
import CurrencySignSvg from '../svg/currency-sign.svg';

export interface ICurrencySignIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencySignIcon: FC<ICurrencySignIconProps> = memo(props => {
  return <CurrencySignSvg {...props} />;
});
