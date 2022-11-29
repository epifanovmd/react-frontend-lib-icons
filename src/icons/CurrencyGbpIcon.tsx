import React, { FC, memo } from 'react';
import CurrencyGbpSvg from '../svg/currency-gbp.svg';

export interface ICurrencyGbpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyGbpIcon: FC<ICurrencyGbpIconProps> = memo(props => {
  return <CurrencyGbpSvg {...props} />;
});
