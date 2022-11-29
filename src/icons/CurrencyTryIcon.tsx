import React, { FC, memo } from 'react';
import CurrencyTrySvg from '../svg/currency-try.svg';

export interface ICurrencyTryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyTryIcon: FC<ICurrencyTryIconProps> = memo(props => {
  return <CurrencyTrySvg {...props} />;
});
