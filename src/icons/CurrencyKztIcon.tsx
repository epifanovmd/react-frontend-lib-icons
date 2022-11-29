import React, { FC, memo } from 'react';
import CurrencyKztSvg from '../svg/currency-kzt.svg';

export interface ICurrencyKztIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyKztIcon: FC<ICurrencyKztIconProps> = memo(props => {
  return <CurrencyKztSvg {...props} />;
});
