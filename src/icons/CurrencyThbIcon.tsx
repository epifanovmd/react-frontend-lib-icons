import React, { FC, memo } from 'react';
import CurrencyThbSvg from '../svg/currency-thb.svg';

export interface ICurrencyThbIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyThbIcon: FC<ICurrencyThbIconProps> = memo(props => {
  return <CurrencyThbSvg {...props} />;
});
