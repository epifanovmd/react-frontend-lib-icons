import React, { FC, memo } from 'react';
import CurrencyInrSvg from '../svg/currency-inr.svg';

export interface ICurrencyInrIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyInrIcon: FC<ICurrencyInrIconProps> = memo(props => {
  return <CurrencyInrSvg {...props} />;
});
