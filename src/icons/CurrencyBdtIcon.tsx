import React, { FC, memo } from 'react';
import CurrencyBdtSvg from '../svg/currency-bdt.svg';

export interface ICurrencyBdtIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyBdtIcon: FC<ICurrencyBdtIconProps> = memo(props => {
  return <CurrencyBdtSvg {...props} />;
});
