import React, { FC, memo } from 'react';
import CurrencyRupeeSvg from '../svg/currency-rupee.svg';

export interface ICurrencyRupeeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyRupeeIcon: FC<ICurrencyRupeeIconProps> = memo(props => {
  return <CurrencyRupeeSvg {...props} />;
});
