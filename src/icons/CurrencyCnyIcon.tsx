import React, { FC, memo } from 'react';
import CurrencyCnySvg from '../svg/currency-cny.svg';

export interface ICurrencyCnyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyCnyIcon: FC<ICurrencyCnyIconProps> = memo(props => {
  return <CurrencyCnySvg {...props} />;
});
