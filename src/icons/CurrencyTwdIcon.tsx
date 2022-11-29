import React, { FC, memo } from 'react';
import CurrencyTwdSvg from '../svg/currency-twd.svg';

export interface ICurrencyTwdIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyTwdIcon: FC<ICurrencyTwdIconProps> = memo(props => {
  return <CurrencyTwdSvg {...props} />;
});
