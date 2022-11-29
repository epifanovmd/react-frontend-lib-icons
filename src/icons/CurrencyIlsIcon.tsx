import React, { FC, memo } from 'react';
import CurrencyIlsSvg from '../svg/currency-ils.svg';

export interface ICurrencyIlsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyIlsIcon: FC<ICurrencyIlsIconProps> = memo(props => {
  return <CurrencyIlsSvg {...props} />;
});
